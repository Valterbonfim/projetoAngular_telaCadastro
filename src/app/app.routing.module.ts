import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { HomeComponent } from './home/home.component';
import { DiretoresComponent } from './diretores/diretores.component';

const routes: Routes = [
  //Home
  {
    path: '',
    component: HomeComponent
  },
  //Funcionario
  {
    path: 'funcionarios',
    component: FuncionariosComponent
  },
  //Diretores
  {
    path: 'diretores',
    component: DiretoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }