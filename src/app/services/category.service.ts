import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {categories} from "../db";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(){
    return of(categories);
  }

  getCategory(id: string) {
     const category = categories.find((x) => x.id==id);
     return of(category);
  }

}
