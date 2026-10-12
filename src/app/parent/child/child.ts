import { Component,EventEmitter,Input, Output } from '@angular/core';
import { emp } from '../../services/User.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [FormsModule,CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
@Input() name!:string;
@Input() price!:number;
@Input() count:number=0;
@Output() counts:EventEmitter<any>=new EventEmitter();
onsubmit(){
  this.count++
  this.counts.emit(this.count)
}
}
