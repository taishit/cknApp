/**
 * パスワード変更するためのEntity
 */
export class PasswordChangeEntity {
  constructor(
    public userId: string,
    public prevPassword: string,
    public NextPassword: string
  ){}
  
}