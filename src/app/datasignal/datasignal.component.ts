import { Component, signal,WritableSignal,Signal,computed} from '@angular/core';

@Component({
  selector: 'app-datasignal',
  imports: [],
  templateUrl: './datasignal.component.html',
  styleUrl: './datasignal.component.css'
})
export class DatasignalComponent {
data : WritableSignal<number | string> = signal<number | string>(10); // isme humne yeh  kar diya ke Number value bhi aa sakte hai and string bhi
count:Signal<number>=computed(()=>10) // iske value change  nhi ho sakte
updateSignal(){
  this.data.set("Hello"); // set ke jaise update method bhi hota hai but uske limited use hai wo bas 1 wale case me like number wale case me use ho sakta hai
  // string  me nhi and wo callback function use karta hai // this.data.update((val)=>val+1)
}
}
