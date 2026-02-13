# GitHub Copilot Instructions - Barbearia App

Você é um desenvolvedor sênior Angular especializado em criar código limpo, escalável e seguindo os padrões estabelecidos neste projeto.

## Arquitetura e Estrutura

### Organização de Pastas
- **Components**: Componentes reutilizáveis globais em `src/app/components/`
- **Services**: Serviços globais em `src/app/services/`
- **Models**: Interfaces TypeScript em `src/app/models/`
- **Guards**: Guards de rota em `src/app/guards/`
- **Directives**: Diretivas customizadas em `src/app/directives/`
- **Pipes**: Pipes customizados em `src/app/pipes/`

### Convenções de Nomenclatura
- **Arquivos**: kebab-case (ex: `cliente.service.ts`, `auth.guard.ts`)
- **Classes**: PascalCase (ex: `ClienteService`, `AuthGuard`)
- **Interfaces**: PascalCase com prefixo `I` (ex: `ICliente`, `IAgendamento`, `IServico`)
- **Métodos/Variáveis**: camelCase (ex: `buscarClientes()`, `clienteId`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `API_BASE_URL`)

## Padrões de Código

### Services
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomeService {
  private apiUrl = 'http://localhost:3000/api/endpoint';

  constructor(private http: HttpClient) {}

  listar(): Observable<ITipo[]> {
    return this.http.get<ITipo[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<ITipo> {
    return this.http.get<ITipo>(`${this.apiUrl}/${id}`);
  }

  criar(data: ITipo): Observable<ITipo> {
    return this.http.post<ITipo>(this.apiUrl, data);
  }

  atualizar(id: number, data: ITipo): Observable<ITipo> {
    return this.http.put<ITipo>(`${this.apiUrl}/${id}`, data);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
```

### Models/Interfaces
```typescript
export interface INomeModel {
  id?: number;
  campo1: string;
  campo2: number;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
}
```

### Components
```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nome-componente',
  templateUrl: './nome-componente.component.html',
  styleUrls: ['./nome-componente.component.scss']
})
export class NomeComponenteComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  // Propriedades públicas
  dados: ITipo[] = [];
  loading = false;

  constructor(private nomeService: NomeService) {}

  ngOnInit(): void {
    this.carregarDados();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  carregarDados(): void {
    this.loading = true;
    this.nomeService.listar()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (dados) => {
          this.dados = dados;
          this.loading = false;
        },
        error: (erro) => {
          console.error('Erro ao carregar dados:', erro);
          this.loading = false;
        }
      });
  }
}
```

### Guards
```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomeGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.verificarCondicao()) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
```

## Regras Específicas

### HTTP e API
- **Base URL**: Use `http://localhost:3000` como base para APIs
- **Métodos HTTP**: Use os métodos padrão do HttpClient
- **Tipagem**: Sempre tipar o retorno dos Observables: `Observable<Tipo>`
- **Interceptor**: O token JWT é adicionado automaticamente via [`auth.interceptor.ts`](src/app/services/auth.interceptor.ts)

### Autenticação
- Token armazenado em `localStorage` com chave `'token'`
- Use [`AuthService`](src/app/services/auth.service.ts) para operações de autenticação
- Proteja rotas com [`AuthGuard`](src/app/guards/auth.guard.ts)
- Exemplo de proteção de rota:
```typescript
{
  path: 'rota-protegida',
  component: ComponenteComponent,
  canActivate: [AuthGuard]
}
```

### RxJS
- SEMPRE use `takeUntil` para gerenciar unsubscribe em componentes
- Crie `private destroy$ = new Subject<void>()` em componentes
- Chame `destroy$.next()` e `destroy$.complete()` no `ngOnDestroy`
- Use operators do RxJS quando apropriado: `map`, `filter`, `switchMap`, `catchError`

### PrimeNG
- Use componentes do PrimeNG quando disponível
- Importe módulos do PrimeNG no módulo apropriado
- Siga a documentação oficial para configuração de componentes
- Componentes comuns: `p-table`, `p-button`, `p-dialog`, `p-calendar`

### Validação e Formulários
- Use **Reactive Forms** para formulários complexos
- Use **Template-driven Forms** apenas para formulários simples
- Sempre adicione validação nos formulários
- Exiba mensagens de erro apropriadas

### Tratamento de Erros
- SEMPRE adicione tratamento de erro em subscribe:
```typescript
.subscribe({
  next: (data) => { /* sucesso */ },
  error: (error) => {
    console.error('Mensagem descritiva:', error);
    // Exibir mensagem ao usuário
  }
});
```

### Lazy Loading
- Module routes devem usar `loadChildren` para lazy loading:
```typescript
{
  path: 'feature',
  loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
}
```

### Estilos
- Use **SCSS** para estilização
- Estilos globais em [`styles.scss`](src/styles.scss)
- Estilos de componente em arquivo `.scss` separado
- Use classes CSS semânticas e descritivas
- Prefira flexbox/grid para layouts

## Regras de Código

### TypeScript
- **Strict Mode**: Sempre respeite as configurações do [`tsconfig.json`](tsconfig.json)
- Use `const` por padrão, `let` apenas quando necessário
- Evite `any`, sempre tipar explicitamente
- Use optional chaining (`?.`) e nullish coalescing (`??`)
- Prefira arrow functions em callbacks

### Imports
- Organize imports em ordem:
  1. Angular core
  2. Angular common
  3. RxJS
  4. Third-party libraries
  5. Models/Interfaces locais
  6. Services locais
  7. Components locais

### Documentação
- Adicione JSDoc em métodos públicos complexos
- Comente código não-óbvio
- Use nomes descritivos que dispensem comentários quando possível

### Testes
- Mantenha arquivos `.spec.ts` junto aos componentes/services
- Siga padrão AAA (Arrange, Act, Assert)
- Use `describe` e `it` descritivos

## Performance

- Use `OnPush` change detection strategy quando apropriado
- Implemente `trackBy` em `*ngFor` para listas grandes
- Lazy load modules para otimizar bundle size
- Use `async` pipe sempre que possível
- Evite lógica complexa em templates

## Segurança

- NUNCA exponha credenciais ou tokens em código
- Valide dados no backend além do frontend
- Sanitize inputs do usuário
- Use o DomSanitizer quando necessário

## Quando Gerar Código

1. **Sempre pergunte** qual módulo/feature o código pertence
2. **Verifique** se já existe estrutura similar no projeto
3. **Siga** exatamente os padrões dos arquivos existentes
4. **Inclua** imports necessários
5. **Adicione** links para arquivos relacionados do workspace
6. **Sugira** melhorias quando identificar code smells

## Exemplo de Resposta Completa

Quando criar um novo serviço, inclua:
- Interface do model em `src/app/models/`
- Service em `src/app/services/`
- Exemplo de uso no componente
- Atualização de imports no módulo se necessário

## Importante

- SEMPRE analise os arquivos existentes antes de sugerir código
- MANTENHA consistência com o código existente
- NÃO sugira mudanças de arquitetura sem contexto completo
- PRIORIZE legibilidade sobre complexidade
- SIGA Angular Style Guide oficial como referência secundária

---

**Quando em dúvida, pergunte ao desenvolvedor antes de assumir uma implementação.**
