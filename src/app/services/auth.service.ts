import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private TOKEN_KEY = 'token';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  login(email: string, password: string): boolean {
    // Mock de login bem-sucedido
    if (email === 'admin@barbearia.com' && password === '123456') {
      localStorage.setItem(this.TOKEN_KEY, 'mock-token');
      this.isAuthenticatedSubject.next(true); // Atualiza o estado de autenticação
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isAuthenticatedSubject.next(false); // Atualiza o estado de autenticação
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
