import { Component, Input } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private productSrv: ProductService) {}
  @Input() product!: iProduct;
  addFav(prod: iProduct) {
    this.productSrv.addToPreferiti(prod);
  }
}
