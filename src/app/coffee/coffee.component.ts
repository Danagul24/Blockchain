import {Component, OnInit} from '@angular/core';
import {Category} from "../models";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../services/category.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
  selectedCategoryId!: string|null;
  categoryName!: string;
  loaded!: boolean;
  categories!: Category[];
  show!: boolean;
  date!: Date;
  status!: string;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private categoryService: CategoryService) {
    this.show = true;
  }

  ngOnInit(): void {
    this.getCategory();
    this.getCategories();
  }

  getCategory() {
    this.route.paramMap.subscribe(params => {
      this.selectedCategoryId = params.get('id');
    });
    if(this.selectedCategoryId == '1'){
      this.categoryName = "Arabica Coffee Beans"
    }
    if(this.selectedCategoryId == '2'){
      this.categoryName = "Robusta Coffee Beans"
    }
    if(this.selectedCategoryId == '3'){
      this.categoryName = "Liberica Coffee Beans"
    }
  }
  getCategories(){
    this.categoryService.getCategories().subscribe((categories=> {
      this.categories = categories;
      this.loaded = true;
    }));
  }
  goBack() {
    this.location.back();
  }

  makeOrder() {
    this.loaded = false;
    setTimeout(()=> {
      this.loaded= true;
      this.date = new Date();
      this.date.setDate(this.date.getDate() + 14);
      alert("Your order will be delivered on " + this.date+
        "\n Check your email for additional information");
    }, 2000);

    this.show = false;
  }



  checkStatus(){
    var items = ['send', 'on the way', 'delivered to the stock'];
    status = items[Math.floor(Math.random() * items.length)];
    alert("Status of order: " + status);
  }
}
