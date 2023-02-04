export interface Icategory {
    id: number,
    name: string,
  }

export interface Iproduct {
  id: number,
  name: string,
  imgURL: string,
  price: number,
  quantity: number,
  categoryId:number,
}