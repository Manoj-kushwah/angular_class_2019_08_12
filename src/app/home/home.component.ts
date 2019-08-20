import { Component, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { AppService } from '../services/app.service';

@Component({
    selector: 'app-home',
    template: '<h1>App home</h1>',
    styles: []
})
export class HomeComponent implements OnInit,OnChanges,OnDestroy {

    constructor(private appService: AppService) {
        console.log('HomeComponent: appService: ', appService);
    }

    ngOnChanges() {

    }

    ngOnDestroy() {

    }

    ngOnInit() {
        let app: string[] = this.appService.getItems();
        console.log('HomeComponent: ngOnInit: app-> ', app);
    }
}