import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
@Injectable({
  providedIn: 'root'
})
export class PhonePipe implements PipeTransform {
  transform(valor: string | null): string {
    if (!valor) return '';
    const limpo = valor.replace(/\D/g, '');

    if (limpo.length === 11) {
      return `(${limpo.slice(0, 2)}) ${limpo[2]} ${limpo.slice(3, 7)}-${limpo.slice(7)}`;
    }

    return valor;
  }
}
