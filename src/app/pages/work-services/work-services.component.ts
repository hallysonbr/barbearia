import { Component } from '@angular/core';
import { GridItem } from 'src/app/interfaces/grid-item';

@Component({
  selector: 'app-work-services',
  templateUrl: './work-services.component.html',
  styleUrls: ['./work-services.component.scss']
})
export class WorkServicesComponent {
  services: GridItem[] = [
    { item: {prop1: 'Corte Clássico', prop2: 'Um corte tradicional e elegante.'}, price: 'R$ 40,00', icon: '✂️' },
    { item: {prop1: 'Barba Completa', prop2: 'Modelagem e acabamento da barba.'}, price: 'R$ 30,00', icon: '🧔' },
    { item: {prop1: 'Corte + Barba', prop2: 'Pacote completo de cabelo e barba.'}, price: 'R$ 60,00', icon: '💇‍♂️' },
    { item: {prop1: 'Hidratação Capilar', prop2: 'Tratamento para cabelo saudável.'}, price: 'R$ 50,00', icon: '💆‍♂️' },
  ]
}
