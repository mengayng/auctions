import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
// import {Products} from '../product/product.component';
import { Product } from '../product/model/product';
import {Injectable} from '@angular/core';

// Resolve<ProductComponent> 是指解析一个泛型
@Injectable()
export class ProductResolve implements Resolve<Product> {
  constructor(private router: Router) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const  productId: number = route.params['id'];
    if (productId === 1) {
      return new Product(1, 'iphone7', 4500, 4.5, '三星7', ['电子产品']);
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }

}
