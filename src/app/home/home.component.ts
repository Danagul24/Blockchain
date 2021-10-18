import { Component, OnInit } from '@angular/core';
import {Category} from "../models";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories!: Category[];
  loaded!: boolean;
  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategory();
  }
  getCategory(): void{
    this.loaded = false;
    this.categoryService.getCategories().subscribe((categories=> {
      this.categories = categories;
      this.loaded = true;
    }));
  }
}
