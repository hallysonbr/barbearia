import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  success(mensagem: string, titulo?: string) {
    this.toastr.success(mensagem, titulo);
  }

  error(mensagem: string, titulo?: string) {
    this.toastr.error(mensagem, titulo);
  }

  info(mensagem: string, titulo?: string) {
    this.toastr.info(mensagem, titulo);
  }

  warning(mensagem: string, titulo?: string) {
    this.toastr.warning(mensagem, titulo);
  }
}
