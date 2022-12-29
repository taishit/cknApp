import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppDeleteComponent } from './app-delete/app-delete.component';
import { AppComponent } from './app.component';
import { AppCorrectComponent } from './app-correct/app-correct.component';
import { AppCorrectDetailComponent } from './app-correct-detail/app-correct-detail.component';
import { MasterManagementComponent } from './master-management/master-management.component';
import { CodeMasterManagementComponent } from './code-master-management/code-master-management.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PasswordChangeComponent } from './password-change/password-change.component';

const routes: Routes = [
  {path: 'management', component: ManagementComponent,
  children:[
    {path: 'appSearch', component: AppSearchComponent}
  ]

},
  {path: 'appSearch', component: AppSearchComponent},
  {path: 'appRegister', component: AppRegisterComponent},
  {path: 'appDelete', component: AppDeleteComponent},
  {path: 'appCorrect', component: AppCorrectComponent},
  {path: 'appCorrectDetail', component: AppCorrectDetailComponent},
  {path: 'masterManagement', component: MasterManagementComponent},
  {path: 'codeMasterManagement', component: CodeMasterManagementComponent},  
  {path: 'menu', component: AppComponent},
  {path: 'login', component: LoginPageComponent },
  {path: 'passChange', component: PasswordChangeComponent },
  {path: 'mainMenu', component: MainMenuComponent,
   children: [
    { path: '', redirectTo: 'management', pathMatch: 'full' },
    {
      path: 'management',
      component: ManagementComponent,
      children:[
        {path: 'appSearch', component: AppSearchComponent},
      ]
    },
    {
      path: 'masterManagement',
      component: CodeMasterManagementComponent,
    },
    {
      path: 'passChange',
      component: PasswordChangeComponent,
    }
  ] },
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
