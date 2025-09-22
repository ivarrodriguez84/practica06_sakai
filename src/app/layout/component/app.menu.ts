import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Practicas',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Mi Componente 01',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente01']
                    },
                    {
                        label: 'Mi Componente 02',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente02']
                    },
                    {
                        label: 'Mi Componente 03',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente03']
                    },
                    {
                        label: 'Mi Componente 04',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente04']
                    },
                    {
                        label: 'Mi Componente 05',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente05']
                    },
                    {
                        label: 'Mi Componente 06',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente06']
                    },
                    {
                        label: 'Mi Componente 07',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente07']
                    },
                    {
                        label: 'Mi Componente 08',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente08']
                    },
                    {
                        label: 'Mi Componente 09',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente09']
                    },
                    {
                        label: 'Mi Componente 10',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente10']
                    },
                    {
                        label: 'Mi Componente 11',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/mi-componente11']
                    },
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}
