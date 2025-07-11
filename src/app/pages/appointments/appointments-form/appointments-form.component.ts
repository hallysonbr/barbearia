import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointments-form',
  templateUrl: './appointments-form.component.html',
  styleUrls: ['./appointments-form.component.scss']
})
export class AppointmentsFormComponent {
  @Output() save = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<void>();
  form: FormGroup;

  services = [
    'Corte Clássico',
    'Barba Completa',
    'Corte + Barba',
    'Hidratação Capilar'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      appointment: ['', Validators.required],
      userName: ['', [Validators.required]],
    });
  }

  get appointment() {
    return this.form.get('appointment');
  }

  get userName() {
    return this.form.get('userName');
  }

  getAppointmentErrorMessage(): string {
    if (this.appointment?.hasError('required')) {
      return 'O agendamento é obrigatório.';
    }
    return '';
  }

  getUserNameErrorMessage(): string {
    if (this.userName?.hasError('required')) {
      return 'O nome é obrigatório.';
    }
    return '';
  }

  onSubmit() {
    if (this.form.valid) {
      const appointment = {
        item: {
          prop1: this.appointment?.value,
          prop2: this.userName?.value
        },
        icon: this.handleIcons(this.appointment?.value)
      };
      this.save.emit(appointment);
      this.form.reset();
    }
  }

   onCancel() {
    this.form.reset();
    this.cancel.emit();
  }

  handleIcons(serviceName: string): string {
    switch (serviceName) {
      case 'Corte Clássico':
        return '✂️';
      case 'Barba Completa':
        return '🧔';
      case 'Corte + Barba':
        return '💇‍♂️';
      case 'Hidratação Capilar':
        return '💆‍♂️';
      default:
        return '';
    }
  }
}
