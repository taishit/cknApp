import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { shishutsuEntity } from '../Model/app.ShishutsuEntity';
import { AppService } from '../service/app.service';
import { AppServiceFront } from '../service/app.serviceFront';
@Component({
  selector: 'app-app-correct',
  templateUrl: './app-correct.component.html',
  styleUrls: ['./app-correct.component.scss']
})
export class AppCorrectComponent implements OnInit {

  //初期化
  constructor(
    private location: Location ,
    private appService: AppService,
    private AppServiceFront: AppServiceFront
  ) { }

  ngOnInit(): void {
    this.getUserInfo(this.getUserId());
  }
  shishutsuModels : shishutsuEntity[] = new Array();
  response = '';
  userId = '';

  //POST通信でユーザIDに紐づく情報を取得
  getUserInfo(userId:string){
      this.appService.getInfo(userId). subscribe(data => {
            this.shishutsuModels = data;
          });
  }

  detailInfo(userId:string, costName:string, costType:string, cost:Number, entryNo:Number){
    //画面要素を連携するサービスを呼び出す
    this.AppServiceFront.detailInfo(userId,costName,costType,cost,entryNo);

  }

  //ログインしたユーザIDを取得
  getUserId():string{
    return this.AppServiceFront.getLoginId();
  }
  
  }
