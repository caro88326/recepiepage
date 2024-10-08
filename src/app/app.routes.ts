import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CreateListComponent } from './create-list/create-list.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'HomePage'
    }, {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'DetailsPage'
    }, {
        path: 'cart',
        component: CartComponent,
        title: 'Cart'
    }, {
        path: 'createList',
        component: CreateListComponent, 
        title: 'CreateListPage'
    }
];

export default routes;

