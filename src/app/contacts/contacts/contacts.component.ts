import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MovieService } from '../../movie/movie.service';
import { ContactsService } from '../../contacts.service';
@Component({
  selector: 'app-contacts',
  imports: [ MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatDividerModule,
      FormsModule,
      MatButton,
      ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
 form: FormGroup;
  constructor(private fb: FormBuilder, private contactService: ContactsService) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  public save(): void {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);

    this.contactService.save({ ...this.form.value } ).subscribe((res) => {
      console.log(res);
    });
  }
}
