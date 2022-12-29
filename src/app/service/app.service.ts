import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { shishutsuEntity } from '../Model/app.ShishutsuEntity';
import { Observable, catchError, throwError} from 'rxjs';
import { LoginEntity } from '../Model/app.LoginEntity';

/**
 * GET・POST 通信を行うサンプル
 */
@Injectable()
export class AppService {
  /**
   * 変数
   */
  search_url = 'http://localhost:8080/api/search';
  regist_url = 'http://localhost:8080/api/regist';
  delete_url = 'http://localhost:8080/api/delete';
  confirm_url = 'http://localhost:8080/api/userConfirm';
  passChange_url = 'http://localhost:8080/api/passwordChange';

  errCode = 0;
  confirmResult = false;

  shishutsuModels : shishutsuEntity[] = new Array();
  LoginEntity : LoginEntity;
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
   * ユーザIDとパスワードが登録済みの情報か確認
   * 
   * @return ログイン結果をLoginEntityで返却
   */
    userConfirm(userId:string, password:string): Observable<LoginEntity> {
     return this.http.post<LoginEntity>(
        this.confirm_url, 
        {
          userId : userId, 
          password : password
        } ,
        this.httpOptions);
  
    }

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
     registInfo(id:String , costName:String , costType:String , cost:Number){
      this.http.post(
        this.regist_url,
         {
           userId : id,
           costName : costName,
           costType : costType,
           cost : cost
          } ,
        this.httpOptions)
        .pipe(
          catchError(this.handleError),
        ).
        subscribe(data => {
        });
        return this.errCode;

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
   * 入力した情報を更新
   * @param id
   * @param costName
   * @param costType
   * @param cost
   * @param entryNo
   * 
   */
    updateInfo(id:String , costName:String , costType:String , cost:Number, entryNo:Number) {
    this.http.post<shishutsuEntity[]>(
      this.regist_url,
        {
          userId : id,
          costName : costName,
          costType : costType,
          cost : cost,
          entryNo : entryNo
        } ,
      this.httpOptions
    ).
    subscribe(data => {
      this.shishutsuModels = data;
    });

  }

  /**
   * ログインユーザのパスワード変更
   * @param userId
   * @param prevPassword
   * @param nextPassword
   */
    passwordChange(userId:string , prevPassword:string , nextPassword:string, userName:string){
    return this.http.post<boolean>(
      this.passChange_url,
        {
          userId : userId,
          prevPassword : prevPassword,
          nextPassword : nextPassword,
          userName : userName
        } ,
      this.httpOptions);
  }

 /**
   * エラーハンドリング処理
   */
  handleError(error:HttpErrorResponse) {
    console.error('エラーてすと:'+error.status);
    //エラーコードを内部変数に保持
    //console.log(this.errCode);
    //this.errCode = error.status;
    // クライアント側あるいはネットワークによるエラー
    if (error.status === 0) {
      console.error('An error occurred:', error.error.message);
    // サーバー側から返却されるエラー
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error.message);
    }
    // エラーメッセージの返却
    return throwError(() => new Error('Something bad happened; please try again later.'));
    //return error.status;

  }
}
