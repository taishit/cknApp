import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { shishutsuEntity } from '../Model/app.ShishutsuEntity';
import { AppService } from '../service/app.service';
import { AppServiceFront } from '../service/app.serviceFront';

@Component({
  selector: 'app-app-correct-detail',
  templateUrl: './app-correct-detail.component.html',
  styleUrls: ['./app-correct-detail.component.scss']
})
export class AppCorrectDetailComponent implements OnInit {

  //変数定義
  shishutsuModel : shishutsuEntity;

  constructor(
    private http: HttpClient ,
    private location: Location ,
    private appService: AppService,
    private AppServiceFront: AppServiceFront
  ) { }

  ngOnInit(): void {
    this.detailGetInfo();
  }

  //遷移前の画面情報を取得
  detailGetInfo(){
    this.shishutsuModel = this.AppServiceFront.detailGetInfo();
  }

  //修正ボタン
  correctDetail(){
    //API呼び出し
    this.appService.updateInfo(
      this.shishutsuModel.userId,
      this.shishutsuModel.costName,
      this.shishutsuModel.costType,
      this.shishutsuModel.cost,
      this.shishutsuModel.entryNo);
    //完了メッセージ
    alert("修正しました");
  }

  //戻るボタン
  backBtnClick() {
    this.location.back();
  }

}
