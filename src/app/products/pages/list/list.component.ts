import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productService: ProductsService) {}

  products: Product[] | undefined;

  ngOnInit(): void {
    this.productService.list().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }

}
