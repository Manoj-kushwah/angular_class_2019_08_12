import { Component, OnInit, OnChanges, OnDestroy, ElementRef, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { AppService } from '../services/app.service';
import { MDynamicComponent } from '../shared/m-dynamic.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit,OnChanges,OnDestroy {
    private nameList: string[] = [];
    public caseValue: number;
    public hideShow: boolean;
    
    @ViewChild('el1', { static: true}) public el1Ref: ElementRef;

    @ViewChild('myTemp', {read: ViewContainerRef, static: true}) public myTemp: ViewContainerRef;
    
    constructor(private appService: AppService, private resolver: ComponentFactoryResolver) {
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
        console.log('HomeComponent: ngOnInit: myTemp-> ', this.myTemp);

        let c1 = this.myTemp.createComponent(this.resolver.resolveComponentFactory(MDynamicComponent));
        console.log('HomeComponent: ngOnInit: c1-> ', c1);

        let c2 = this.myTemp.createComponent(this.resolver.resolveComponentFactory(MDynamicComponent));
        console.log('HomeComponent: ngOnInit: c2-> ', c2);

    }

    public inputValue(event: any): void{
        console.log("inputValue: event: ", event);
    }

    public changeDiv(a: boolean): void{
        this.hideShow = a;
    }
}