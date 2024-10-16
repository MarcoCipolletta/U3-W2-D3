import { Component, Input } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  favourites: iProduct[] = [];
  constructor(private productSvc: ProductService) {}

  @Input() product!: iProduct;

  addFav(prod: iProduct) {
    this.productSvc.addToFavourites(prod);
    this.favourites = this.productSvc.favouritesArr;
    console.log(this.favourites);
  }

  isFavourite(prod: iProduct) {
    const found = this.favourites.find((p) => p.id === prod.id);
    if (found) {
      return true;
    } else {
      return false;
    }
  }
  ngOnInit() {
    this.favourites = this.productSvc.favouritesArr;
  }
}
