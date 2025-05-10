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
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
