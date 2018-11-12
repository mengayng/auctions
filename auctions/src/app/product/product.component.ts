import { Component, OnInit } from '@angular/core';
// import { Product } from '../product/product.component';
import { Product } from './model/product';
import {ActivatedRoute, Params} from '@angular/router';
import {extractStyleParams} from '../../../node_modules/@angular/animations/browser/src/util';
import {ProductService} from '../share/product.service';
import {FormControl} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<Product>;
  public imgUrl = 'http://placehold.it/320x150';
  public productId: number;
  public productName: string;

  public keyword: string;
  public titleFilter: FormControl = new FormControl();
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => this.keyword = value );
  }
// 组件实例化以后，会被调用一次
  ngOnInit() {
    // this.products = [
    //   new Product(1, '第一个商品', 1.099, 3.5, '这是第一个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    //   new Product(2, '第二个商品', 2.099, 4.5, '这是第二个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    //   new Product(3, '第三个商品', 3.099, 2.5, '这是第三个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    //   new Product(4, '第四个商品', 4.099, 1.5, '这是第四个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    //   new Product(5, '第五个商品', 5.099, 0.5, '这是第五个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    //   new Product(6, '第六个商品', 6.099, 3.5, '这是第六个商品, 是我在学习慕课网Angular入门实战是创建的', ['电子产品', '硬件设备']),
    // ];
    // 从URL传递参数
    // this.productId = this.routeInfo.snapshot.queryParams['id'];
    // 在查询参数时传递参数
    // this.productId = this.routeInfo.snapshot.params['id'];
    // // 参数订阅
    // this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);
    //
    // this.routeInfo.data.subscribe((data: {product: Products}) => {
    //   this.productId = data.product.id;
    //   this.productName = data.product.name;
    // });
    this.products = this.productService.getProducts();
  }
}
//
//
// export class Products {
//   constructor(public id: number, public name: string) {}
// }
