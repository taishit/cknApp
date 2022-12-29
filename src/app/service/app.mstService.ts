import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { codeMstEntity } from '../Model/app.CodeMstEntity';

/**
 * GET・POST 通信を行うサンプル
 */
@Injectable()
export class AppMstService {
  /**
   * 変数
   */
  search_url = 'http://localhost:8080/api/master/code';
  codeMstModels : codeMstEntity[] = new Array();
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
   * POST 通信のサンプル
   * 
   * @return コード種別に紐づくコード情報を返却
   */
    getInfo() {
    return this.http.post<codeMstEntity[]>(this.search_url ,this.httpOptions);

  }
}