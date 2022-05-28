import { Company } from "./company.model";

export class Coupon {
    constructor(public id?:number,public company?:Company,public category?:Category, public title?:string,public description?:string,
        public startDate?:Date,public endDate?:Date, public amount?: number,public price?:number,public image?:string){

    }
}

export enum Category {
    FOOD="FOOD", ELECTRONICS="ELECTRONICS", HOME="HOME", CLOTHING="CLOTHING", CAMPING="CAMPING", VACATION="VACATION"
  }
