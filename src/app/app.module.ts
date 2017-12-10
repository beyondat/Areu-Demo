import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import {CategoryService} from '../service/category.service';
import { HomeComponent } from './home/home.component';
import { PlaceRankComponent } from './place-rank/place-rank.component';
import { PlaceRankService } from '../service/place-rank.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    HomeComponent,
    PlaceRankComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path: 'categories/:categoryId', component: PlaceRankComponent }
    ])
  ],
  providers: [CategoryService,
    PlaceRankService,
    { provide : LocationStrategy, useClass : HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
