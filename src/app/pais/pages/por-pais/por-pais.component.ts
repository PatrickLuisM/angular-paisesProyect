import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[]= [];
  
  //Importando el service y sus propiedades
  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
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

  sugerencias( termino: string){
   this.hayError = false;
  }

}
