import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  constructor(public myService: MyServiceService) {}

  selectPlayer(player: { name: string; club: string }) {
    this.myService.selectFootballer(player);
  }
}
