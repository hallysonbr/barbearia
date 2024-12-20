import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  atendimentosHoje: number = 0;
  aguardandoAtendimento: number = 0;
  agendamentosAmanha: number = 0;

  ngOnInit(): void {
    this.atendimentosHoje = this.generateRandomNumber(1, 100);
    this.aguardandoAtendimento = this.generateRandomNumber(1, 100);
    this.agendamentosAmanha = this.generateRandomNumber(1, 100)
  }

  generateRandomNumber(min: number = 0, max: number = 1): number {
    if (min > max) {
        throw new Error("Min value cannot be greater than max value.");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

