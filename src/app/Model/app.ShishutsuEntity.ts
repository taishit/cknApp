/**
 * 支出情報を取得するEntity
 */
export class shishutsuEntity {
  constructor(
    public userId: string,
    public entryNo: Number,
    public costName: string,
    public costType: string,
    public cost: Number,
    public createDate: Date,
    public createName: string,
    public updateDate: Date,
    public updateName: string
  ){}
  
}