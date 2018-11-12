import { Injectable } from '@angular/core';
import {Product} from '../product/model/product';
import { Comment } from '../product/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [
    new Product(1, '第一个商品', 1.099, 3.5, '这是第一个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.099, 4.5, '这是第二个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 3.099, 2.5, '这是第三个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    new Product(4, '第四个商品', 4.099, 1.5, '这是第四个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.099, 0.5, '这是第五个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    new Product(6, '第六个商品', 6.099, 3.5, '这是第六个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
  ];
  public comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-03-03 23:22:22', '李四', 5, '东西是不错'),
    new Comment(3, 1, '2017-04-04 24:22:22', '王五', 4, '东西很不错'),
    new Comment(4, 1, '2017-05-05 20:22:22', '赵六', 2, '东西非常不错'),

  ]

  constructor() { }
  getProducts() {
    return this.products;
  }
  getProduct(id: number) {
    console.log(id);
    return this.products.find((product) => product.id == id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comments: Comment) => comments.productId == id);
  }
}
