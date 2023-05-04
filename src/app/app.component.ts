import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx';
  nombrePersona :string = 'Rodrigo'

  imprimirNombre(nombre:string):void{
    if (nombre != undefined && nombre != null){
        const alumno = {
          name: nombre,
          dni: '30790171',
        };
       console.log(alumno.name.toUpperCase());
    }
   
  }
}
