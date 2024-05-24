import { HttpClient, HttpParams } from "@angular/common/http";
import {Injectable } from "@angular/core";
import { Iproduct } from "../models/product";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class ProductsService{
    constructor(private http:HttpClient){

    }
    getAllProducts():Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(
            "https://fakestoreapi.com/products",
            {params:new HttpParams().append("limit",5)}
        )
    }
}