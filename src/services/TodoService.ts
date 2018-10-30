
import { Task } from '../data/task';
import { Storage } from '@ionic/storage';


export class TodoService{
    
    data: Task[] = [];

    // constructor(private storage: Storage){}

    setTaskService(data: Task){
      this.data.push(data);
      
    }

    getTaskService(){
        this.data.slice();
    }

}