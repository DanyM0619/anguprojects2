import { Component } from '@angular/core';
import { ServiceShowService } from '../service-show.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {

  constructor(private service_show: ServiceShowService){}

  get items(){
    return this.service_show.item;
  }

}
