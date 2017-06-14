import { Component, AfterViewInit } from "@angular/core";
import Productservice = require("./home.service");
import ProductService = Productservice.ProductService;
import Product = require("./models/product");
import ProductModel = Product.ProductModel;

@Component({
    template: `<img src="../../images/users.png" style="text-align:center"/>`
})

export class HomeComponent implements AfterViewInit {
    products: ProductModel[];

    constructor(private woodService: ProductService) {
        
    }

    ngAfterViewInit() {
        this.woodService.getProducts().subscribe((product: ProductModel[]) => {
            this.products = product;
            console.log(this.products);
        });
    }
}