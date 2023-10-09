import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamic-page',
  templateUrl: './dinamic-page.component.html',
  styleUrls: ['./dinamic-page.component.css']
})
export class DinamicPageComponent {

  public miformulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Strinding', Validators.required]
    ])
  })

  public newFavorite: FormControl = new FormControl('', Validators.required)




  constructor(private fb: FormBuilder) { }


  get favoriteGames() {
    return this.miformulario.get('favoriteGames') as FormArray
  }

  isValidField(field: string): boolean | null {
    return this.miformulario.controls[field].errors && this.miformulario.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if (!this.miformulario.controls[field]) return null

    const errors = this.miformulario.controls[field].errors || {}

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

  onDeleteFavorite(pos: number): void {
    this.favoriteGames.removeAt(pos)
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return

    const newGame = this.newFavorite.value
    this.favoriteGames.push(
      this.fb.control(newGame, Validators.required)
    )
    this.newFavorite.reset()

  }

  isValidFieldArray(unArray: FormArray, i: number) {
    return unArray.controls[i].errors && unArray.controls[i].touched
  }

  onSubmit(): void {
    if (this.miformulario.invalid) {
      this.miformulario.markAllAsTouched()
      return
    }
    // console.log(this.miformulario.value)
    // console.log('asa')
    // console.log(this.miformulario.value)

    (this.miformulario.controls['favoriteGames'] as FormArray) = this.fb.array([])
    this.miformulario.reset()
  }

}
