import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { AppServiceFront } from '../service/app.serviceFront';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  //変数設定
  title = 'cknApp';
  showFiller = false;
  loginFlg = this.serviceFront.loginGetInfo();
  loginConfirm = false;

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
  };

  //コンストラクタ
  constructor(private http: HttpClient,
    private location: Location,
    private serviceFront: AppServiceFront,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginConfirm = window.confirm("ログアウトしますか？");
    //ログアウトしたい場合ログイン画面に遷移
    if(this.loginConfirm){
      this.router.navigate(['login']);
    }
    
  }

}
