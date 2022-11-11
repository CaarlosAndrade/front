import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { VeiculoListaComponent } from './components/veiculo/veiculo-lista/veiculo-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VeiculoAlteracaoComponent } from './components/veiculo-alteracao/veiculo-alteracao.component';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    VeiculoListaComponent,
    VeiculoAlteracaoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
