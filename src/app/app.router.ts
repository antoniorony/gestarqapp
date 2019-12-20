import { Routes, RouterModule } from '@angular/router'
const routes: Routes = [
    //home
    {
        path: '',
        component: app-home
    },
    //Products
    {
        path: 'sobre',
        component: app-sobre
    }   
];
export const RoutingModule = RouterModule.forRoot(routes);