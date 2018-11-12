import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product/model/product';
import {ProductService} from '../share/product.service';
import { Comment } from '../product/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // public productTitle: string;
  product: Product;
  comments: Comment[];
  newRating = 5;
  newComment = '';
  isCommentHidden = true;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    // this.productTitle = this.routeInfo.snapshot.params['productTitle'];
    const productId: number = this.routeInfo.snapshot.params['productId'];
    console.log(productId);
    this.product = this.productService.getProduct(productId);
    console.log(this.product);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  addComment() {
    const comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);
    const sum = this.comments.reduce((sum, comment)  => sum + comment.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newComment = null;
    this.isCommentHidden = true;
    this.newRating = 5;
  }
}
