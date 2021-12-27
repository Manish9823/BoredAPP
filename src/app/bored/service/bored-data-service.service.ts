import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoredDataServiceService {

  constructor() { }


  getData(type:string,success:any,failure:any){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',`https://www.boredapi.com/api/activity?type=${type}`,true);

    xhr.onload=()=>{
      if(xhr.status===200){
      let json=JSON.parse(xhr.responseText);
      success(json);
      }
      else{
        failure("Error To Get Data !");
      }
    }

    xhr.onerror=()=>{
      failure("Error From Server !");
    }

    xhr.ontimeout=()=>{
      failure("Server Timeout !");
    }  
    xhr.send();
  }






  // postData(data:any,success:any,failure:any){
  //   const xhr=new XMLHttpRequest();
  //   xhr.open('POST',`https://www.boredapi.com/api/activity?type=${type}`,true);

  //   xhr.onload=()=>{
  //     if(xhr.status===200){
  //     let json=JSON.parse(xhr.responseText);
  //     success(json);
  //     }
  //     else{
  //       failure("Error To Get Data !");
  //     }
  //   }

  //   xhr.onerror=()=>{
  //     failure("Error From Server !");
  //   }

  //   xhr.ontimeout=()=>{
  //     failure("Server Timeout !");
  //   }  
  //   xhr.send();
  // }

}
