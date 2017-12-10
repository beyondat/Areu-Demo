import { Component, OnInit } from '@angular/core';
import {Category, CategoryService} from '../../service/category.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getCategories();
   }

  ngOnInit() {
  }

}
