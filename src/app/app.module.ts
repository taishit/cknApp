import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppService } from './service/app.service';
import { AppMstService } from './service/app.mstService';
import { AppServiceFront } from './service/app.serviceFront';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppDeleteComponent } from './app-delete/app-delete.component';
import { AppCorrectComponent } from './app-correct/app-correct.component';
import { AppCorrectDetailComponent } from './app-correct-detail/app-correct-detail.component';
import { MasterManagementComponent } from './master-management/master-management.component';
import { CodeMasterManagementComponent } from './code-master-management/code-master-management.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    AppSearchComponent,
    AppRegisterComponent,
    AppDeleteComponent,
    AppCorrectComponent,
    AppCorrectDetailComponent,
    MasterManagementComponent,
    CodeMasterManagementComponent,
    LoginPageComponent,
    MainMenuComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [AppService,AppMstService,AppServiceFront],
  bootstrap: [AppComponent] 
})
export class AppModule { }
