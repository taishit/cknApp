/**
 * ログインするためのEntity
 */
export class LoginEntity {
  constructor(
    public userId: string,
    public password: string,
    public userName: string,
    public loginResult: boolean

  ){}
  
}