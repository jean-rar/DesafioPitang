import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BestUserRepositoryComponent } from './componentes/best-user-repository/best-user-repository.component';
import { RepositoryComponent } from './componentes/repository/repository.component';
import { SearchUserComponent } from './componentes/search-user/search-user.component';

const routes: Routes = [
  {
    path:"buscador", component:SearchUserComponent
  },
  {
    path:"melhores repositorios", component:BestUserRepositoryComponent
  },
  {
    path:"repositorio", component:RepositoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
