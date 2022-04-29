import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product!: Product;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.product = {
      name: 'Semillas Ricino Verde',
      price: 10000,
      description: 'Semillas de Arbol Ricino Verde',
    };
  }

  guardar(miFormulario: FormGroup) {
    console.log(miFormulario.value);
    this.product = miFormulario.value;
    this.productService.create(this.product).subscribe((resp) => {
      if (resp.ok === true) {
        Swal.fire('Producto Guardado!!', '', 'success');
        miFormulario.reset();
      } else {
        Swal.fire('Error', resp.msg, 'error');
      }
    });
  }
}
