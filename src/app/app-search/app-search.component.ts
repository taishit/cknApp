import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { shishutsuEntity } from '../Model/app.ShishutsuEntity';
import { AppService } from '../service/app.service';
import { AppServiceFront } from '../service/app.serviceFront';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {

  shishutsuModels : shishutsuEntity[] = new Array();
  response = '';
  userId = '';

  //初期化
  constructor(
    private location: Location ,
    private appService: AppService,
    private appServiceFront: AppServiceFront
  ) { }

  ngOnInit(): void {
    this.getUserInfo(this.getUserId());
  }
  
  //戻るボタン
  backBtnClick() {
    this.location.back();
  }

  //POST通信でユーザIDに紐づく情報を取得
  getUserInfo(userId:string){
     this.appService.getInfo(userId). subscribe(data => {
           this.shishutsuModels = data;
         });
  }

  //ログインしたユーザIDを取得
  getUserId():string{
    return this.appServiceFront.getLoginId();
  }


}
