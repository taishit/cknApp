/**
 * コード情報を取得するEntity
 */
export class codeMstEntity {
  constructor(
    public no: Number,
    public codeType: string,
    public codeName: string,
    public codeValue: string,
    public createDate: Date,
    public createName: string,
    public updateDate: Date,
    public updateName: string
  ){}
  
}