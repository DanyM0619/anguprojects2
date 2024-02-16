import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceShowService {

  constructor() { }

  private listItem =[{

    label: 'Celular',
    value: 47,
    price: 50000
  
  },{
    label: 'Consola',
    value: 6,
    price: 1500000
},{
    label: 'Televisor',
    value: 15,
    price: 1350000
}];

get item(){
  return this.listItem;
}
}
