import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo;
  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.productservice.getAlbum(1)
                        .subscribe(
                          response => this.albumInfo = response
                        );
  }

}
