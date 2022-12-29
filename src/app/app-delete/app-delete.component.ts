import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { shishutsuEntity } from '../Model/app.ShishutsuEntity';
import { AppService } from '../service/app.service';
import { AppServiceFront } from '../service/app.serviceFront';

@Component({
  selector: 'app-app-delete',
  templateUrl: './app-delete.component.html',
  styleUrls: ['./app-delete.component.scss']
})
export class AppDeleteComponent implements OnInit {

  shishutsuModels : shishutsuEntity[] = new Array();
  userId = '';
  costName = '';
  costType = '';
  cost = 0;

  
  constructor(
    private location: Location ,
    private appService: AppService,
    private AppServiceFront: AppServiceFront
  ) { }

  ngOnInit(): void {
    this.getUserInfo(this.getUserId());
  }

  //POST通信でユーザIDに紐づく情報を取得
  getUserInfo(userId:string){
    this.appService.getInfo(userId).subscribe(data => {
      this.shishutsuModels = data;
    });
  }

  deleteInfo(userId:string, costName:string, costType:string, cost:Number, entryNo:Number) {
    //サービスを呼んでサーバに連携。データを削除する
    this.appService.deleteInfo(userId,costName,costType,cost,entryNo);

    //リスト取得してテーブルを再設定
    this.getUserInfo(userId);

  }
  //ログインしたユーザIDを取得
  getUserId():string{
    return this.AppServiceFront.getLoginId();
  }

}
