import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    nombre: string = "Allan Padilla"
    edad: number = 18
    persona: any = {
      Nombre: 'Luis',
      Edad: 20,
      Direccion: 'Barberena'
    };
   frutas:string[]=["manzana","naranja","mandarina"]
    cambiandoEdad(){
    this.edad= 50
    }
}
