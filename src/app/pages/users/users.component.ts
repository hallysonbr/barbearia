import { Component, HostListener, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    { item: {prop1: 'Carlos Silva', prop2: 'carlos@gmail.com', phone: '11912345678'} },
    { item: {prop1: 'Mariana Rocha', prop2: 'mariana@hotmail.com', phone: '21998765432'} },
    { item: {prop1: 'João Mendes', prop2: 'joao.mendes@yahoo.com', phone: '31955554444'} },
    { item: {prop1: 'Ana Paula', prop2: 'ana.paula@empresa.com', phone: '41966667777'} }
  ];

  viewMode: 'cards' | 'table' = 'cards';

  colunas = ['nome', 'email', 'telefone'];

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

  addUser(user: any) {
    const newUser = {
      item: {
        prop1: user?.name,
        prop2: user?.email,
        phone: user?.phone
      }
    }
    this.users.push(newUser);
    this.notification.success('Usuário cadastrado com sucesso!', 'Cadastro');
    this.exibirFormulario = false;
  }

  exibirForm() {
    this.exibirFormulario = true;
  }

  cancelRegister() {
    this.exibirFormulario = false;
  }
}
