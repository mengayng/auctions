import {CanDeactivate} from '@angular/router';
import {ProductDescComponent} from '../product-desc/product-desc.component';
import {ProductComponent} from '../product/product.component';

export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent): boolean {
    return window.confirm('你还没有保存，确定要离开吗？');
  }
}
