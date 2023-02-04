import { Component } from '@angular/core';
import { Icategory, Iproduct } from '../DataTypes/dataTypes';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  val:number=1
  filteredList:Iproduct[]
  categoryList:Icategory[]=[
    {
      id: 1,
      name: "Labtops" ,
    },
    {
      id: 2,
      name: "SmartPhones" ,
    },
    {
      id: 3,
      name: "Taplets" ,
    },
   ]

   productsList:Iproduct[]=[
    {
      id: 1,
      name: "Lenovo X2360",
      imgURL: "https://fakeimg.pl/50x50/",
      price: 30000,
      quantity: 5,
      categoryId:1,
    },
    {
      id: 5,
      name: "Nokia S50",
      imgURL: "https://fakeimg.pl/50x50/",
      price: 10000,
      quantity: 25,
      categoryId:2,
    },
    {
      id: 7,
      name: "Tablet Accer (Pro New) ",
      imgURL: "https://fakeimg.pl/50x50/",
      price: 15000,
      quantity: 8,
      categoryId:3,
    },
  ]
  constructor(){
    this.filteredList =this.productsList
  }

  change(categoryId:string){
    // console.log(categoryId)
    // console.log(typeof(categoryId)) // output string
    this.filteredList = this.productsList.filter(product=>product.categoryId==Number(categoryId))
    //Number(categoryId)
  }
}
