import { VeiculoAlteracaoComponent } from './components/veiculo-alteracao/veiculo-alteracao.component';
import { VeiculoListaComponent } from './components/veiculo/veiculo-lista/veiculo-lista.component';
import { VeiculoComponent } from './components/veiculo/veiculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cadastro', component: VeiculoComponent},
  {path: 'consulta', component: VeiculoListaComponent},
  {path: 'alteracao/:id', component: VeiculoAlteracaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
