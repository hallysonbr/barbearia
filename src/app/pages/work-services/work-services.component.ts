import { Component } from '@angular/core';
import { GridItem } from 'src/app/interfaces/grid-item';

@Component({
  selector: 'app-work-services',
  templateUrl: './work-services.component.html',
  styleUrls: ['./work-services.component.scss']
})
export class WorkServicesComponent {
  services: GridItem[] = [
    { name: 'Corte Clássico', description: 'Um corte tradicional e elegante.', price: 'R$ 40,00', icon: '✂️' },
    { name: 'Barba Completa', description: 'Modelagem e acabamento da barba.', price: 'R$ 30,00', icon: '🧔' },
    { name: 'Corte + Barba', description: 'Pacote completo de cabelo e barba.', price: 'R$ 60,00', icon: '💇‍♂️' },
    { name: 'Hidratação Capilar', description: 'Tratamento para cabelo saudável.', price: 'R$ 50,00', icon: '💆‍♂️' },
  ]
}
