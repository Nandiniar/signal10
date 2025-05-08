import { Component ,signal,computed} from '@angular/core';

@Component({
  selector: 'app-computedsignal',
  imports: [],
  templateUrl: './computedsignal.component.html',
  styleUrl: './computedsignal.component.css'
})
export class ComputedsignalComponent {
x=10;
y=20;
z=this.x+this.y;
showvalue(){
  console.log(this.z);
  this.x=100;
  console.log(this.z); // this.x ke value ko change karne ke wajay se this.z ke value change nhi hoge kyuki uske value phale he change ho chuke hai
  // agar hume aisa chaiye ka value change ho toh normal me toh wo possible nhi hai hume computed signal ka use karna padhega
}
a=signal(10);
b=signal(20);
c=computed(()=>this.a()+this.b())
showv(){
  console.log(this.c());
  this.a.set(100);
  console.log(this.c())
// computed signal readable signal hote hai inke value change nhi kar sakte directly like hum c ke directly nhi update and set kar sakte but unke dependencies like
// a and b ke help se computed signal ke value change ho sakte hai , iss wale case me  c computed hai but a and b nhi hai
  
}

}
