import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPages } from '../pages/tabs/tabs';
import { CdListPage } from '../pages/cd-list/cd-list';
import { BookListPage } from '../pages/book-list/book-list';
import { AllServices } from '../services/services';
import { LendBookPage } from '../pages/book-list/lend-book/lend-book';
import { LendCdPage } from '../pages/cd-list/lend-cd/lend-cd';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    TabsPages,
    CdListPage,
    BookListPage,
    LendBookPage,
    LendCdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    TabsPages,
    CdListPage,
    BookListPage,
    LendBookPage,
    LendCdPage
  ],
  providers: [
    AllServices,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
