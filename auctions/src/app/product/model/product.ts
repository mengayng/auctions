// 封装的对象，来装我们的产品信息
export class Product {
  constructor( public id: number,
               public title: string,
               public price: number,
               public rating: number,
               public desc: string,
               public categories: Array<string>) {}
}

export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {}
}
