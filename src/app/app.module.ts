import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ShowIfAuthDirective } from './directives/show-if-auth.directive';
import { WorkServicesComponent } from './pages/work-services/work-services.component';
import { GridComponent } from './components/grid/grid.component';
import { UsersComponent } from './pages/users/users.component';
import { TableComponent } from './components/table/table.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { PhonePipe } from './pipes/phone.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    ShowIfAuthDirective,
    WorkServicesComponent,
    GridComponent,
    UsersComponent,
    TableComponent,
    UsersFormComponent,
    ModalComponent,
    PhonePipe
  ],
  exports: [
    PhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 3000,
      preventDuplicates: true,
    }),
  ],
  providers: [
    AuthGuard,
    AuthService,
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
