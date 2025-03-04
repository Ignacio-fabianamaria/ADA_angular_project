import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MovieService } from '../../movie/movie.service';

@Component({
  selector: 'app-admin',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatDividerModule, FormsModule, MatButton, ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {

form: FormGroup;
constructor(private fb: FormBuilder, private movieService: MovieService){
  this.form = this.fb.group({
    image: ['', [Validators.required]],
    title: ['', [Validators.required]],
    year: ['', [Validators.required]],
    score: ['', [Validators.required]],
    sinopse: ['', [Validators.required]]
  })
}
/*
public save():void{
  console.log(this.form.value);
if (this.form.invalid){
  return
}
console.log(this.form.value);
} */
save(): void {
  if (this.form.invalid) {
    return;
  }

  /* this.movieService.save({ ...this.form.value } as Movie).subscribe((res) => {
    console.log(res);
  }); */
}
}
