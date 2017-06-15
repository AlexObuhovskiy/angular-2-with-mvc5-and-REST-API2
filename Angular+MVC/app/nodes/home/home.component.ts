import { Component, OnInit } from "@angular/core";
import Productservice = require("./product.service");
import ProductService = Productservice.ProductService;
import Product = require("./models/product");
import ProductModel = Product.ProductModel;

@Component({
    providers: [ProductService],
    template: `
        <grid [products]="products"></grid>
        <img src="../../images/users.png" style="text-align:center"/>
    `
})

export class HomeComponent implements OnInit {
    products: ProductModel[];

    constructor(private woodService: ProductService) { }

    ngOnInit() {
        this.woodService.getProducts()
            .subscribe((product: ProductModel[]) => {
                this.products = product;
            });
    }
}