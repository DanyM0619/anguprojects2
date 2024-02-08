import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {

  constructor(
    private _builder: FormBuilder
  ){
    this.signupForm = this._builder.group({
      nombre: [''],
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    });
  }

  signupForm: FormGroup;

  enviar(values: string){
    console.log(values);
  }

  onSubmit(formulario: any){
    alert(`
    Nombre: ${formulario.nombre}
    Usuario: ${formulario.usuario}
    Email: ${formulario.email}
    Contraseña: ${"Esto es reservado"}`)
  }
}

