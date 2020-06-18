import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { AboutComponent } from '../about/about.component';
import { CategoryComponent } from '../category/category.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path:'productdetail/:id', component: ProductdetailComponent},
    { path: 'category',  component: CategoryComponent },
    { path: 'about',      component: AboutComponent },
    { path: 'contact',      component: ContactComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];