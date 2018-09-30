import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPages } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = TabsPages;
  settingsPage:any = SettingsPage;

  @ViewChild('monContenu') content: NavController;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen, 
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onChangePage(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

