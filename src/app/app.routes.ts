import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'HomePage'
    }, {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'DetailsPage'
    }
];

export default routes;

