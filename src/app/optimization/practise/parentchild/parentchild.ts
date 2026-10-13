import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  imports: [],
  templateUrl: './parentchild.html',
  styleUrl: './parentchild.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Parentchild {
  @Input() employees:number[]=[]
  #cdr=inject(ChangeDetectorRef)
 total=0
  @Output() count:EventEmitter<number>=new EventEmitter()
  onclick(){
    setTimeout(()=>{
      this.total++
    this.count.emit(this.total)
    this.#cdr.detectChanges()
    },2000)
  }
  
}
