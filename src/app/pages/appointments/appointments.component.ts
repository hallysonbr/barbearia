import { Component, HostListener } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
 appointments = [
    { item: {prop1: 'Corte Clássico', prop2: 'Carlos Silva'}, icon: '✂️' },
    { item: {prop1: 'Barba Completa', prop2: 'José Maria'}, icon: '🧔' },
    { item: {prop1: 'Corte + Barba', prop2: 'Altinho do Santos'}, icon: '💇‍♂️' },
    { item: {prop1: 'Hidratação Capilar', prop2: 'Maria Aparecida'}, icon: '💆‍♂️' },
    { item: {prop1: 'Corte Clássico', prop2: 'João da Silva'}, icon: '✂️' },
    { item: {prop1: 'Barba Completa', prop2: 'Ana Paula'}, icon: '🧔' },
    { item: {prop1: 'Corte + Barba', prop2: 'Pedro Henrique'}, icon: '💇‍♂️' },
    { item: {prop1: 'Hidratação Capilar', prop2: 'Maria Clara'}, icon: '💆‍♂️' }
  ];

  viewMode: 'cards' | 'table' = 'cards';

  colunas = ['Serviço', 'Nome'];

  exibirFormulario = false;

  constructor(private notification: NotificationService) {}

  ngOnInit(): void {
    this.verifyWindowSize();
  }

  @HostListener('window:resize')
  verifyWindowSize() {
    if (window.innerWidth <= 768) {
      this.viewMode = 'cards';
    }
  }

  toogleExibition(option: 'cards' | 'table') {
    this.viewMode = option;
  }

  addAppointment(appointment: any) {
    this.appointments.push(appointment);
    this.notification.success('Agendamento cadastrado com sucesso!', 'Cadastro');
    this.exibirFormulario = false;
  }

  exibirForm() {
    this.exibirFormulario = true;
  }

  cancelRegister() {
    this.exibirFormulario = false;
  }
}
