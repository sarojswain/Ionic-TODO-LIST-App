import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewTaskPage } from '../pages/new-task/new-task';
import { TodoService } from '../services/TodoService'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications
    
  ]
})
export class AppModule {}
