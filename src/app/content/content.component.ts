import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  constructor(public myService: MyServiceService) {}

  get selectedFootballer() {
    return this.myService.selectedFootballer;
  }
}
