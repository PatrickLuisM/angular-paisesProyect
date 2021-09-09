import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})

export class PorCapitalComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[]= [];

  //Importando el service y sus propiedades
  constructor(private paisService: PaisService) { }

  buscar( capital: string){
    this.hayError = false;
    this.termino = capital;
    this.paisService.buscarCapital(capital)
    //Devuelve la repuesta del input 
       .subscribe(respon =>{
        this.paises = respon
        console.log(this.paises)
      }, (err)=>{
        //Devuelve un mensaje si encontró error
        this.hayError= true;
        this.paises = [];
      })
  }
  
}
