import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // })

  public miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(3)]],
    inStorage: [0, [Validators.required, Validators.min(3)]],
  })



  ngOnInit(): void {
    this.miFormulario.reset()
  }

  isValidField(field: string): boolean | null {
    return this.miFormulario.controls[field].errors && this.miFormulario.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if (!this.miFormulario.controls[field]) return null

    const errors = this.miFormulario.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`

      }

    }
    return null;
  }


  onSave(): void {
    console.clear()

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value)


  }
}
