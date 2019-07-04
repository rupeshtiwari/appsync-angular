import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AuthComponent
  },
  {
    path: 'todo',
    pathMatch: 'full',
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
