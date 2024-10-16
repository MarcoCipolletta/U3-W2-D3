import { Component } from '@angular/core';
import { iProduct } from '../../interfaces/i-product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private productSvc: ProductService) {}
  preferiti: iProduct[] = [];

  ngOnInit() {
    this.productSvc.preferiti$.subscribe((products) => {
      this.preferiti = products;
    });
    console.log(this.preferiti.length);
  }
  badgePreferiti() {
    if (this.preferiti.length > 9) {
      return '9+';
    } else {
      return this.preferiti.length.toString();
    }
  }
}
