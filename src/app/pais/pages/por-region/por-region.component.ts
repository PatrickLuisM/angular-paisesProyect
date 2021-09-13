import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {


  regiones: string[] =  ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  
  constructor( private paisService: PaisService) { }

  getClase( region: string): string{
    return ( region === this.regionActiva) ? ' btn btn-primary me-2' : 'btn btn-outline-primary me-2'
  }

  activarRegion (region : string){
    this.regionActiva  = region;

    //TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(this.regionActiva)
       .subscribe( respon =>{
         this.paises = respon;
         
       })
    
  }

}
