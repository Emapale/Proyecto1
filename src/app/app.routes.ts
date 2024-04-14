import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help/help.component';

import { MiguelComponent } from './pages/miguel/miguel.component';

import { CristelgrijalvaComponent } from './pages/cristelgrijalva/cristelgrijalva.component';


export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'help',
        component: HelpComponent
    },

    {
        path: "miguel",
        component: MiguelComponent
    }

     {
        path: 'Cristel',
        component: CristelgrijalvaComponent
    },

];

