import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //creo mis variables javascript
  title = 'proyecto01';
  nombre = "Elvis Prez"
  edad = 34
  email = "elvis@gmail.com"
  //arreglo
  sueldos = [800000,900000,1100000]
}
