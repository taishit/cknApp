import { Component } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { AppServiceFront } from './service/app.serviceFront';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //変数設定
  title = 'cknApp';
  loginFlg = this.serviceFront.loginGetInfo();

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
  };

  //コンストラクタ
  constructor(private http: HttpClient,
              private location: Location,
              private serviceFront: AppServiceFront

  ) { }

  showFiller = false;

  //戻るボタン
  backBtnClick() {
    this.location.back();
  }

}
