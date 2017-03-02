import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { AlineacionesPage } from '../pages/alineaciones/alineaciones';
import { LobbyPage } from '../pages/lobby/lobby';
import { CajeroPage } from '../pages/cajero/cajero';
import { CompeticionesPage } from '../pages/competiciones/competiciones';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { RulesPage } from '../pages/rules/rules';
import { InformacionPage } from '../pages/informacion/informacion';
import { ContactoPage } from '../pages/contacto/contacto';
import { CambiarpaisPage } from '../pages/cambiarpais/cambiarpais';
import { PromocionesPage } from '../pages/promociones/promociones';
import { LogoutPage } from '../pages/logout/logout';
import { ReferirPage } from '../pages/referir/referir';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { SlideComponent } from '../components/slide/slide';


@NgModule({
  declarations: [
    MyApp,
    AlineacionesPage,
    CompeticionesPage,
    LobbyPage,
    CajeroPage,
    RegisterPage,
    LoginPage,
    RulesPage,
    TutorialPage,
    InformacionPage,
    ContactoPage,
    CambiarpaisPage,
    PromocionesPage,
    LogoutPage,
    ReferirPage,
    SlideComponent,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom'}) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AlineacionesPage,
    CompeticionesPage,
    LobbyPage,
    CajeroPage,
    RegisterPage,
    LoginPage,
    RulesPage,
    TutorialPage,
    InformacionPage,
    ContactoPage,
    CambiarpaisPage,
    PromocionesPage,
    LogoutPage,
    ReferirPage,
    SlideComponent,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ConferenceData, UserData, Storage]
})
export class AppModule {}
