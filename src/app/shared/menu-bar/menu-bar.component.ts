import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Productos',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Crear',
            icon: 'pi pi-save',
            routerLink: '/product/create',
          },
          {
            label: 'Listar',
            icon: 'pi pi-list',
            routerLink: '/product/list',
          },
        ],
      },
    ];
  }
}
