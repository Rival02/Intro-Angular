import { Component,  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent   {


  heroes : string[]=['Spiderman', 'Iroaman', 'Hulk', 'Thor'];
  heroeBorrado : string = '';

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
    
    

  }

  
}



