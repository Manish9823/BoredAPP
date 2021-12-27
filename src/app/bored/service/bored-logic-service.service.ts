import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BoredDataServiceService } from './bored-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class BoredLogicServiceService {

  public data={};
  public list=[
    "education", "music", "relaxation", "busywork", "charity", "cooking", "diy", "recreational", "social" 
  ]
  public list1=this.list.map((item)=>{
    return item.toUpperCase();
  })

  public text='education';

  public isLoading=false;
  public hasError=false;
  public errorMessage=''

  public likeIt=false;

  constructor(public boredDataService:BoredDataServiceService, public route:Router) {
    
   }

   worked(type:string){
    let text=type.toLowerCase();
    this.text=text;
    this.isLoading=true;

    this.boredDataService.getData(text,(data:any)=>{
      this.isLoading=false;
      this.hasError=false;
      this.data=data;
      console.log(data)
    },(err:any)=>{
      this.isLoading=false;
      this.hasError=true;
      console.log(err);
    })
  }

  refresh(){
    let url=window.location;
    window.location=url;
  }

}
