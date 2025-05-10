import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent {
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const user = {
        name: this.form.controls['name'].value,
        email: this.form.controls['email'].value,
        phone: this.form.controls['phone'].value
      }
      this.save.emit(user);
      this.form.reset();
    }
  }

  onCancel() {
    this.form.reset();
    this.cancel.emit();
  }
}
