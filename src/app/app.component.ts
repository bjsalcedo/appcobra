import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav} from 'ionic-angular';
import { Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs';

import { AlineacionesPage } from '../pages/alineaciones/alineaciones';
import { LobbyPage } from '../pages/lobby/lobby';
import { CajeroPage } from '../pages/cajero/cajero';
import { CompeticionesPage } from '../pages/competiciones/competiciones';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { RulesPage } from '../pages/rules/rules';
//import { ReferirPage } from '../pages/referir/referir';

import { InformacionPage } from '../pages/informacion/informacion';
import { ContactoPage } from '../pages/contacto/contacto';
import { CambiarpaisPage } from '../pages/cambiarpais/cambiarpais';
import { PromocionesPage } from '../pages/promociones/promociones';
//import { LogoutPage } from '../pages/logout/logout';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [

   ];
  loggedInPages: PageInterface[] = [
    { title: 'Lobby', component: TabsPage, tabComponent: LobbyPage, index: 0, icon: 'home' },
    { title: 'Equipo', component: TabsPage, tabComponent: AlineacionesPage, index: 2, icon: 'home' },
    { title: 'Competiciones', component: TabsPage, tabComponent: CompeticionesPage, index: 1, icon: 'home' },
    { title: 'Promociones', component: PromocionesPage, icon: 'home' },
    { title: 'Cajero', component: TabsPage, tabComponent: CajeroPage, index: 3, icon: 'home' },
    { title: 'Información', component: InformacionPage, icon: 'home' },
    { title: 'Cambiar país', component: CambiarpaisPage, icon: 'home' },
    { title: 'Contactanos', component: ContactoPage, icon: 'home' },
    { title: 'Cerrar sesión', component: TabsPage, icon: 'log-out', logsOut: true}

  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Regístrese', component: RegisterPage, icon: 'person-add' },
    { title: 'Ingrese', component: LoginPage, icon: 'log-in' },
    { title: 'Lobby', component: TabsPage, tabComponent: LobbyPage, index: 0, icon: 'home' },
    { title: '¿Cómo jugar?', component: TutorialPage, icon: 'help-circle' },
    { title: 'Reglas', component: RulesPage, icon: 'book' }
  ];

  rootPage = TabsPage;
  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public confData: ConferenceData,
    public storage: Storage
    ) {
    this.rootPage = TabsPage;
    this.platformReady()

    // load the conference data
    confData.load();
    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });

    this.listenToLoginEvents();
  }


  openPage(page: PageInterface) {

   //Evalua la pagina que se va a rootear
    if (page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index });

    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Error: Didn't set nav root");
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.userData.logout();
      }, 1000);
    }
  }



    listenToLoginEvents() {
      this.events.subscribe('user:login', () => {
        this.enableMenu(true);
      });

      this.events.subscribe('user:signup', () => {
        this.enableMenu(true);
      });

      this.events.subscribe('user:logout', () => {
        this.enableMenu(false);
      });
    }

    enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
      this.menu.enable(!loggedIn, 'loggedOutMenu');
    }

  platformReady() {
      //llamar cualquier plugin inicial
      this.platform.ready().then(() => {
      Splashscreen.hide();
    });
  }


  //En el sidemenu se coloca el color del icono de la pagina seleccionada.
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
  //Condicion que evalua si son componentes de las pestañas o de subpaginas
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        console.log("ingreso a los tabs");

        //retorna el color de los iconos de los tabs
        return 'secondary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      console.log("ingreso a sub pagina");
      return 'secondary';
    }
    return;
  }
}