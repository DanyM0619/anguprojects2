import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {

  id: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute ){ 
  }

  NgOnInit(){
    const ID = this.route.snapshot.paramMap.get('id');

    if(ID !==null){
      this.id = ID;
    }else{
      console.error('ID no fue encontrado en la ruta.')
    }
  }

  navegar(){
    console.log("Voy a navegar");
    this.router.navigate(["/pagina2"]);
  }
}
