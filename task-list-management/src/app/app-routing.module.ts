import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { AuthGuard } from './services/auth.guard';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { OneTaskComponent } from './components/one-task/one-task.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login', 
    component: LoginComponent
    },

    {
      path: 'register',
      component: RegisterComponent
     },

     {
      path: 'task-list',
      component: TaskListComponent,
      canActivate: [AuthGuard]
     },

     {
      path: 'add-task',
      component: AddTaskComponent,
      canActivate: [AuthGuard]
     },

     {
      path: 'archive',
      component: ArchiveComponent,
      canActivate: [AuthGuard]
     },

     {
      path: 'one-task/:id',
      component: OneTaskComponent,
      canActivate: [AuthGuard]
     },
     {
      path: 'edit-task/:id',
      component: EditTaskComponent,
      canActivate: [AuthGuard]
     }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
