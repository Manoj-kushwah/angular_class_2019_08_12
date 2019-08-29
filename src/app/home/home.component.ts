import { Component, OnInit, OnChanges, OnDestroy, ElementRef, ViewChild } from "@angular/core";
import { AppService } from '../services/app.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit,OnChanges,OnDestroy {
    private nameList: string[] = [];

    @ViewChild('el1') private el1Ref: ElementRef;
    
    constructor(private appService: AppService) {
        console.log('HomeComponent: ', this);
        console.log('HomeComponent: appService: ', appService);
    }

    ngOnChanges() {

    }

    ngOnDestroy() {

    }

    ngOnInit() {
        this.nameList = this.appService.getItems();
        console.log('HomeComponent: ngOnInit: list-> ', this.nameList);
    }

    public inputValue(event: any): void{
        console.log("inputValue: event: ", event);
    }
}