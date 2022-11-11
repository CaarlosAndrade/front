import { AmbienteConsultaComponent } from './components/ambiente/ambiente-consulta/ambiente-consulta.component';
import { VeiculoAlteracaoComponent } from './components/veiculo/veiculo-alteracao/veiculo-alteracao.component';
import { VeiculoListaComponent } from './components/veiculo/veiculo-lista/veiculo-lista.component';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbienteComponent } from './components/ambiente/ambiente.component';

const routes: Routes = [
  {path: 'cadastro-veiculo', component: VeiculoComponent},
  {path: 'consulta-veiculo', component: VeiculoListaComponent},
  {path: 'consulta-ambiente', component: AmbienteConsultaComponent},
  {path: 'cadastro-ambiente', component: AmbienteComponent},
  {path: 'alteracao-veiculo/:id', component: VeiculoAlteracaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
