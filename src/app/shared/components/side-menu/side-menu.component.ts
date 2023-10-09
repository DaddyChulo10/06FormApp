import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    {title: 'Básicos', route: './ModuloReactive/M1/basic'},
    {title: 'Dinámicos', route: './ModuloReactive/M1/dinamic'},
    {title: 'Switches', route: './ModuloReactive/M1/switches'},

  ]

  public authMenu: MenuItem[] = [
    {title: 'Registro', route: './ModuloAuth/auth/register'},

  ]

}
