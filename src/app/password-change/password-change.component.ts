import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AppServiceFront } from '../service/app.serviceFront';
import { PasswordChangeEntity } from '../Model/app.PasswordChangeEntity';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  //変数設定
  model = new PasswordChangeEntity('', '', '');
  prevPassword = "";
  nextPassword = "";
  userId = "";
  userName = "";
  changeFlg = false;

  constructor(
    private serviceFront: AppServiceFront,
    private appService: AppService
  ) { 
    this.userId = this.getUserId();
    this.userName =  this.getUserName();
  }

  ngOnInit(): void {
  }

  passChange(prevPass:string, nextPass:string){
    //変数を設定しserviceを呼び出す。
    this.appService.passwordChange(this.userId, prevPass, nextPass, this.userName).subscribe(data => {
      this.changeFlg = data;
      if (this.changeFlg) {
        //変更が完了したメッセージを表示
        alert("変更が完了しました");

      } else {
        this.prevPassword = "";
        this.nextPassword = "";
        alert("変更に失敗しました。パスワードを見直し再度設定してください。")
        console.log("変更に失敗しました。パスワードを見直し再度設定してください。");
      }
    });
  }

  //ログインしたユーザIDを取得
  getUserId():string{
    return this.serviceFront.getLoginId();
  }

  //ログインしたユーザ名を取得
  getUserName():string{
    return this.serviceFront.getLoginUserName();
  }

}
