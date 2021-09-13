import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[]= [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = true;
  
  //Importando el service y sus propiedades
  constructor(private paisService: PaisService) { }

  

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
    //Devuelve la repuesta del input 
       .subscribe(respon =>{
        this.paises = respon
      }, (err)=>{
        //Devuelve un mensaje si encontró error
        this.hayError= true;
        this.paises = [];
      })
  }

  sugerencias( termino: string){
   
   this.hayError = false;
   this.termino = termino;
   this.mostrarSugerencias = true;

   this.paisService.buscarPais(termino)
       .subscribe( paises => {
         this.paisesSugeridos = paises.splice(0,5)
      },(err) => {
        this.paisesSugeridos = [];
      
      })
       
    }

  buscarSugerido( termino: string){
     this.buscar( termino);
   
  }

}
