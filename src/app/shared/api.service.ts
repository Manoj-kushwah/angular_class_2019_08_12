import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private static GET_ALL_USERS = "https://jsistudentportal.000webhostapp.com/api/user/get/";
  constructor(private http:HttpClient) {
    console.log("ApiService http:-> ", http);
  }

  public getAllUsers(): Promise<User[]> {
    let userList = new Array<User>();
    return this.http.get("https://jsistudentportal.000webhostapp.com/api/user/get/")
    .toPromise().then((res: any) => {
      console.log('ApiService getAllUsers res:-> ',res);
      let data = res.data;
      if (data && data.length) {
        for(let i in data){
          console.log('ApiService getAllUsers data i:-> ', data[i]);
          let user = new User();
          user.valueOf(data[i]);
          userList.push(user);
        }
      }
      return userList;
    }).catch(err=>{
      console.log('ApiService getAllUsers err:-> ',err);
      return userList;
    });
  }
}
