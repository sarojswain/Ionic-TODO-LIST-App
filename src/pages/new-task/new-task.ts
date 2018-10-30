import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { Task } from '../../data/task';
import { TodoService } from '../../services/TodoService';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-new-task',
  templateUrl: 'new-task.html',
})
export class NewTaskPage {

  message:string ='';
  date: string = '';
  time: string = '';

  constructor(public navCtrl: NavController, 
              private todoService: TodoService,
              private toastCtrl: ToastController,
              private storage: Storage
              ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewTaskPage');
  }

  onAddTask(){
    
    this.storage.set('message', this.message);
    const task = new Task(this.message, this.date, this.time);
    this.todoService.setTaskService(task)    
    // this.navCtrl.pop();
    let toast = this.toastCtrl.create({
      message: 'Your todo task created successfully, please press back to see your list',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
    
  }

}
