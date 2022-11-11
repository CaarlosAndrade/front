import { AmbienteComponent } from './components/ambiente/ambiente.component';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { VeiculoListaComponent } from './components/veiculo/veiculo-lista/veiculo-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VeiculoAlteracaoComponent } from './components/veiculo/veiculo-alteracao/veiculo-alteracao.component';
import { AmbienteConsultaComponent } from './components/ambiente/ambiente-consulta/ambiente-consulta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VeiculoComponent,
    VeiculoListaComponent,
    VeiculoAlteracaoComponent,
    AmbienteComponent,
    AmbienteConsultaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
