import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import Httpservice = require("../../services/httpService");
import HttpService = Httpservice.HttpService;
import Productmodel = require("./models/product");
import ProductModel = Productmodel.ProductModel;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

const woodApiUrl = 'api/woodapi/';

@Injectable()
export class ProductService {
    constructor(private httpService: HttpService) { }

    public getProducts(): Observable<ProductModel[]> {
        return this.httpService.get<ProductModel[]>(woodApiUrl);
    }
}