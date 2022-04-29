import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
})
export class FormProductsComponent implements OnInit {

  @Output() onEnter: EventEmitter<FormGroup> = new EventEmitter();
  @Input() product!: Product
  @Input() header!: string
  miFormulario!: FormGroup;
  


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', ],
    });

    this.miFormulario.reset({
      ...this.product,
    })

  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    this.onEnter.emit(this.miFormulario);
  }
}
