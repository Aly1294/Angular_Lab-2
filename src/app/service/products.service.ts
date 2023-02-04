import { Injectable } from '@angular/core';
import { Icategory, Iproduct } from '../DataTypes/dataTypes';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList:Iproduct[]=[
    {
      id: 1,
      name: "Labtop 1" ,
      imgURL:"https://fakeimg.pl/50x50/",
      price: 250,
      quantity: 5,
      categoryId:1,
    },
    {
      id: 1,
      name: "Labtop 2" ,
      imgURL:"https://fakeimg.pl/50x50/",
      price: 250,
      quantity: 5,
      categoryId:1,
    },
    {
      id: 1,
      name: "Labtop 3" ,
      imgURL:"https://fakeimg.pl/50x50/",
      price: 250,
      quantity: 5,
      categoryId:1,
    },
    {
      id: 2,
      name: "Mobile 1" ,
      imgURL:"https://fakeimg.pl/50x50/",
      price: 250,
      quantity: 5,
      categoryId:1,
    },
    {
      id: 2,
      name: "Mobile 2" ,
      imgURL:"https://fakeimg.pl/50x50/",
      price: 250,
      quantity: 5,
      categoryId:1,
    },
    {
      id: 2,
      name: "Mobile 3" ,
      imgURL:"https://fakeimg.pl/50x50/",
      price: 250,
      quantity: 5,
      categoryId:1,
    },
  
   ]
  
  
   categoryList:Icategory[]=[
    {
      id: 1,
      name: "Labtops" ,
    },
    {
      id: 2,
      name: "SmartPhones" ,
    },
   ]
  
  constructor(){}
 
}
