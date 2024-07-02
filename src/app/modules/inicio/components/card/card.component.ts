import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Productos } from 'src/app/models/productos';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: Productos[];
  
   constructor(){
     this.info = [
       {
         id: "",
         nombre: "mujer",
         
         
         imagen: "https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2024/1/23/9313969.jpg",
         alt: "Chanchito"
       },
       {
         id: "",
         nombre: "hombre",
         
         imagen: "https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2024/1/23/9313968.jpg",
         alt: "Border Collie"
       },
       {
         id: "",
         nombre: "niños",
         
         
         imagen: "https://mmgrim2.azureedge.net/MediaFiles/Grimoldi/2024/1/23/9313967.jpg",
         alt: "Gatito"
       }
     ]
   }
}
