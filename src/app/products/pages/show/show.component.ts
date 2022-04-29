import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import Swal from 'sweetalert2';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  showView: boolean = true;
  product!: Product;
  params!: string;
  pago: string | undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.params = params.get('id')!;
    });

    this.productService.show(this.params).subscribe((resp) => {
      if (resp.ok === true) {
        this.product = resp.product; 
      } else {
        this.router.navigateByUrl('/product/list');
      }
    });
  }

  edit() {
    this.showView = false;
  }

  updateProduct(miFormulario: FormGroup) {
    this.product = miFormulario.value;
    this.productService.update(this.product, this.params).subscribe((resp) => {
      if (resp.ok === true) {
        Swal.fire('Producto Actualizado!!', '', 'success');
        miFormulario.reset();
        this.showView = true;
      } else {
        Swal.fire('Error', resp.msg, 'error');
      }
    });
  }

  deleteProduct() {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar la orden?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.delete(this.params).subscribe((resp) => {
          if (resp.ok === true) {
            Swal.fire('Producto Eliminado!!', '', 'success');
            this.router.navigateByUrl('/product/list');
          } else {
            Swal.fire('Error', resp.msg, 'error');
          }
        });
      } else {
        return;
      }
    });
  }
}
