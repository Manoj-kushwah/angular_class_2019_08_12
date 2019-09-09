import { Component, OnInit } from "@angular/core";
import { ApiService } from '../shared/api.service';
import { User } from '../shared/user';

@Component({
    selector: 'app-home',
    template: '<h1>App home</h1> <ul><li *ngFor="let user of userList;">Name: {{user.firstName}} {{user.lastName}}<br>Gender: {{user.gender}}<br></li></ul>',
    styles: []
})
export class HomeComponent implements OnInit {
    public userList: User[] = new Array<User>();
    constructor(public api: ApiService){

    }

    ngOnInit() {
        let list = this.api.getAllUsers();
        console.log('HomeComponent list:-> ',list);
        list.then(userLi=> {
            console.log('HomeComponent userLi:-> ',userLi);
            this.userList = userLi;
        }).catch(err=>{

        });
    }
}