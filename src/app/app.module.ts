import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';



import 'hammerjs';

import { ProductService } from './services/product.service';

 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideListComponent } from './side-list/side-list.component';
import { CatlogComponent } from './catlog/catlog.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {MatSliderModule} from '@angular/material/slider';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideListComponent,
    CatlogComponent,
    ProductdetailComponent,
    AboutComponent,
    CategoryComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
