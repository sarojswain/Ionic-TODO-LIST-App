import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewTaskPage } from '../new-task/new-task';
import { TodoService } from '../../services/TodoService';
import { Task } from '../../data/task';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newTaskPage = NewTaskPage;
  taskArray: Task[]=[];
  cond = true;

  constructor(public navCtrl: NavController,
              private todoService: TodoService,
              private localNotification: LocalNotifications
              ) {

  }

  ionViewWillEnter() {
    if(this.taskArray.length != 0){
      this.cond = false;
    }
    this.taskArray = this.todoService.data;
  }

  onCilckButton(){
    this.localNotification.schedule({
      id: 1,
      text: 'test notification'
    })
  }


}
