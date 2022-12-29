import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { codeMstEntity } from '../Model/app.CodeMstEntity';
import { AppMstService } from '../service/app.mstService';
import { AppService } from '../service/app.service';
import { AppServiceFront } from '../service/app.serviceFront';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss']
})
export class AppRegisterComponent implements OnInit {

  //変数定義
  userId = '';
  costName = '';
  costType = '選択してください';
  cost = 0;
  codeName = '';
  errCode = 0;
  codeMstModels : codeMstEntity[] = new Array();

  constructor(
    private location: Location ,
    private appMstService: AppMstService ,
    private AppService: AppService,
    private appServiceFront: AppServiceFront
  ) { }

  ngOnInit(): void {
    this.getInfo();
    this.getUserId();
  }

   //戻るボタン
   backBtnClick() {
    this.location.back();
  }

   //POST通信でマスタ情報を取得
   getInfo(){
    this.appMstService.getInfo().subscribe(data => {
      this.codeMstModels = data;
    });
  }
  
  //入力した情報を登録
  registInfo(){
  this.errCode = this.AppService.registInfo(this.userId,this.costName,this.costType,this.cost);
 
    //エラーかどうかの情報を受取り、その結果に合わせたメッセージを表示させる。
    if(this.errCode === 0){
      alert("入力された情報を登録しました。");
    } else{
      alert('登録に失敗しました。');
    }
    
  }

  //ログインしたユーザIDを取得
  getUserId(){
    this.userId = this.appServiceFront.getLoginId();
  }

}
