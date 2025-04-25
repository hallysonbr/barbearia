import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    { item: {prop1: 'Carlos Silva', prop2: 'carlos@gmail.com', prop3: '(11) 91234-5678'} },
    { item: {prop1: 'Mariana Rocha', prop2: 'mariana@hotmail.com', prop3: '(21) 99876-5432'} },
    { item: {prop1: 'João Mendes', prop2: 'joao.mendes@yahoo.com', prop3: '(31) 95555-4444'} },
    { item: {prop1: 'Ana Paula', prop2: 'ana.paula@empresa.com', prop3: '(41) 96666-7777'} }
  ];

  viewMode: 'cards' | 'table' = 'cards';

  colunas = ['nome', 'email', 'telefone'];

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
}
