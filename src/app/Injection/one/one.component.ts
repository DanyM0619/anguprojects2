import { Component } from '@angular/core';
import { ServiceShowService } from '../service-show.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  constructor(private service_show: ServiceShowService){}

  get items(){
    return this.service_show.item;
  }
  

}
