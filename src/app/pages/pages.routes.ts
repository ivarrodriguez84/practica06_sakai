import { MiComponente11 } from './practicas/mi-componente11/mi-componente11';
import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { MiComponente01 } from './practicas/mi-componente01/mi-componente01';
import { MiComponente02 } from './practicas/mi-componente02/mi-componente02';
import MiComponente03 from './practicas/mi-componente03/mi-componente03';
import { MiComponente04 } from './practicas/mi-componente04/mi-componente04';
import { MiComponente05 } from './practicas/mi-componente05/mi-componente05';
import { MiComponente06 } from './practicas/mi-componente06/mi-componente06';
import { MiComponente07 } from './practicas/mi-componente07/mi-componente07';
import { MiComponente08 } from './practicas/mi-componente08/mi-componente08';
import { MiComponente09 } from './practicas/mi-componente09/mi-componente09';
import { MiComponente10 } from './practicas/mi-componente10/mi-componente10';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'mi-componente01', component: MiComponente01 },
    { path: 'mi-componente02', component: MiComponente02 },
    { path: 'mi-componente03', component: MiComponente03 },
    { path: 'mi-componente04', component: MiComponente04 },
    { path: 'mi-componente05', component: MiComponente05 },
    { path: 'mi-componente06', component: MiComponente06 },
    { path: 'mi-componente07', component: MiComponente07 },
    { path: 'mi-componente08', component: MiComponente08 },
    { path: 'mi-componente09', component: MiComponente09 },
    { path: 'mi-componente09/:param_nombre/:param_edad', component: MiComponente09 },
    { path: 'mi-componente10', component: MiComponente10 },
    { path: 'mi-componente10/:param_nombre/:param_edad', component: MiComponente10 },
    { path: 'mi-componente11', component: MiComponente11 },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
