import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { TodosAnimesComponent } from './todos-animes/todos-animes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'animes', component: TodosAnimesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
