import { Component, OnInit, Input } from "@angular/core";
import Product = require("../nodes/home/models/product");
import ProductType = Product.ProductType;
import WoodType = Product.WoodType;

@Component({
	selector: 'grid',
    template: `
		<div *ngFor="let product of products">
            <p>{{product.Id}}</p>
			<p>{{getProductTypeString(product.Type)}}</p>
			
        </div>
	`
})
export class GridComponent {
    @Input() products: Product.ProductModel;

    private getProductTypeString(productType: Product.ProductType): string {
        switch (productType) {
            case ProductType.Platbands:
                return 'Налічник';
            case ProductType.Bead:
                return 'Штапік';
            case ProductType.Lining:
                return 'Вагонка';
            case ProductType.Plinth:
                return 'Плінтус';
            default:
                return 'Невідомий';
        }
    }

	private getWoodTypeSring(woodType: WoodType): string {
	    return '';
	}
}