import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
  tasks_text:string=''

  tasks:string[]= []
  Completed:string[]=[]

  addText(event:any){
      this.tasks_text=event.target.value;
  }

  addTask(){
    if(this.tasks_text==''){
      alert('Please enter Task')
    }
    else{
      this.tasks.push(this.tasks_text)

    let v:any = document.getElementById('inp');
    v.value=''
    this.tasks_text=''

    }

    
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
 }

 taskComplated(index: number) {

    this.Completed.push(this.tasks[index]);

    this.tasks.splice(index, 1);}
}
