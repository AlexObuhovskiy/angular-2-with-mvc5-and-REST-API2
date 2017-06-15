import { Component, OnInit, Input } from "@angular/core";
import Product = require("../nodes/home/models/product");
import ProductType = Product.ProductType;

@Component({
    selector: 'grid',
    template: `
		<div *ngFor="let product of products">
            <p>{{product.Id}}</p>
			<p>{{product.TypeAsString}}</p>
			<img [src]="getImgSource(product)"/>
            
        </div>
	`
})
export class GridComponent {
    @Input() products: Product.ProductModel;

    getImgSource(product: Product.ProductModel) {
        switch (product.Type) {
            case ProductType.Platbands:
                return '../../images/users.png';
            default:
                return '';
        }
    }

}
