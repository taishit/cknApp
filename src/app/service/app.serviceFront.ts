import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { shishutsuEntity } from '../Model/app.ShishutsuEntity';
import { Observable } from 'rxjs';

/**
 * GET・POST 通信を行うサンプル
 */
@Injectable()
export class AppServiceFront {
  /**
   * 変数
   */
  search_url = 'http://localhost:8080/api/search';
  regist_url = 'http://localhost:8080/api/regist';
  delete_url = 'http://localhost:8080/api/delete';

  loginFlg:boolean = false;
  userId = "";
  userName = "";

  shishutsuModel : shishutsuEntity = new shishutsuEntity("",0,"","",0,new Date(),"",new Date(),"");
  shishutsuModels : shishutsuEntity[] = new Array();
  httpOptions = {
    headers: new HttpHeaders().set('Content-Type','application/json')
  };


  /**
   * コンストラクタ
   * 
   * @param http HttpClient を DI する
   */
  constructor(private http: HttpClient) { }
  
  /**
   * ユーザIDをもとに紐づく登録情報の一覧を返却
   * 
   * @return useIdに紐づく支出情報モデルを返却
   */
   getInfo(id:String): Observable <shishutsuEntity[]> {
    return this.http.post<shishutsuEntity[]>(this.search_url, {userId : id} ,this.httpOptions);

  }

    /**
   * 入力した情報を登録
   * @param id
   * @param costName
   * @param costType
   * @param cost
   * 
   */
     registInfo(id:String , costName:String , costType:String , cost:Number) {
      this.http.post<shishutsuEntity[]>(
        this.regist_url,
         {
           userId : id,
           costName : costName,
           costType : costType,
           cost : cost
          } ,
        this.httpOptions
      ).
      subscribe(data => {
        this.shishutsuModels = data;
      });
  
    }

 /**
   * 選択した登録情報を削除する
   * 
   */
  deleteInfo(userId:String, costName:String, costType:String, cost:Number, entryNo:Number) {
    this.http.post<shishutsuEntity[]>(
      this.delete_url, {
        userId : userId,
        costName : costName,
        costType : costType,
        cost : cost,
        entryNo : entryNo
      } ,
      this.httpOptions).
      subscribe(data => {
        this.shishutsuModels = data;
      });

  }

   /**
   * 選択した登録情報を画面側で保持する
   * 
   */
  detailInfo(userId:string, costName:string, costType:string, cost:Number,entryNo:Number){
    //連携された要素を設定
    this.shishutsuModel.userId = userId;
    this.shishutsuModel.costName = costName;
    this.shishutsuModel.costType = costType;
    this.shishutsuModel.cost = cost;
    this.shishutsuModel.entryNo = entryNo;
  }

  /**
   * 保持していた画面情報を取得する
   * 
   */
  detailGetInfo():shishutsuEntity{
    return this.shishutsuModel;
  }

  /**
   * 保持していたログイン情報を返却する
   * 
   */
    loginGetInfo(){
    return this.loginFlg;
  }

  /**
   * ログイン時のユーザIDを取得する
   * 
   */
    getLoginId():string{
    return this.userId;
  }
  
  /**
   * ログイン時のユーザIDをセットする
   * 
   */
    setLoginId(userId:string){
    this.userId = userId;
  }

  /**
   * ログイン時のユーザ名を取得する
   * 
   */
   getLoginUserName():string{
    return this.userName;
  }
  
  /**
   * ログイン時のユーザ名をセットする
   * 
   */
    setLoginUserName(userName:string){
    this.userName = userName;
  }
  /**
   * ログイン情報を更新する
   * 
   */
    loginSetInfo(loginFlg:boolean){
      this.loginFlg = loginFlg;
    }
}