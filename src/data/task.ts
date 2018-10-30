
export class Task{
    message: string;
    date: string;
    time: string;

    constructor(msg:string, date:string, time:string){
        this.message = msg;
        this.date = date;
        this.time = time;
    }
}