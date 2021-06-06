import {Component} from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private route: Router){
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  sair(){
    sessionStorage.removeItem("token");
    this.route.navigate(['']);
  }

}
