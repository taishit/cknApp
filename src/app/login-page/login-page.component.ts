import { Component, OnInit } from '@angular/core';
import { LoginEntity } from '../Model/app.LoginEntity';
import { AppServiceFront } from '../service/app.serviceFront';
import { Router } from '@angular/router'
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginFlg = false;
  userId = "";
  password = "";
  loginResult = false;
  userName = "";

  constructor(private router: Router,
              private serviceFront: AppServiceFront,
              private appService: AppService
             ) { }

  ngOnInit(): void {
  }

  login(userId:string , password:string){
    
    this.appService.userConfirm(userId,password).subscribe(data => {
      this.loginResult = data.loginResult;
      this.userName = data.userName;
      if (this.loginResult) {
        //ログイン済みにフラグを更新する
        this.loginFlg = true;
        this.serviceFront.loginSetInfo(this.loginFlg);
        this.serviceFront.setLoginId(userId);
        this.serviceFront.setLoginUserName(this.userName);

        //画面遷移
        this.router.navigate(['mainMenu']);
      } else {
        alert("ログインに失敗しました。ログインIDまたはパスワードが誤っています。")
        console.log("ログインに失敗しました");
      }
    });

  }
  
}
