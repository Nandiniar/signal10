import { Component, signal,effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatasignalComponent } from "./datasignal/datasignal.component";
import { ComputedsignalComponent } from "./computedsignal/computedsignal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatasignalComponent, ComputedsignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal10';
  // signal is a wrapper around a value
  // they gave a signal when a value change like count=signal(10)
  // signal is reactive which means ke agar value change hoga toh signal aayega
  // two types of signal -writable (jiske values change ho sakte hai),computed signals(read only signal)
  count=signal(10);
  x=20;
  constructor(){
    effect(()=>{
      console.log("THe value is..............")
      console.log(this.count())
    })
  }  // effect bas signal ke case me use hota hai hai agar hum effect kise normal variable ke saath use karte hai then hume kuch nhi effect dekta
  updatevalue(val:string)
{
  if(val=='inc'){
this.count.set(this.count()+1)

}
else if(val=='dec'){
  this.count.set(this.count()-1)


  }
}
}

