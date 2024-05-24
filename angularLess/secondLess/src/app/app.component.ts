import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
// import { products as data } from './data/products';
import { Iproduct } from './models/product';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyListComponent,CommonModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent implements OnInit{
  title = 'secondLess';
  products: Iproduct[] = [];
  constructor(private productService:ProductsService){

  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(product=>{
      this.products=product
    })
  }
}
