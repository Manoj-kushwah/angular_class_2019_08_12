import { Directive, OnInit, ElementRef, Input, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[m-input]',
})
export class MInputDirective implements OnInit {

    private title: string = "Date time.";

    @Input('age') age: number = 25;
    
    @Output('ageOut') output: EventEmitter<any> = new EventEmitter<any>(); 

    constructor(private el: ElementRef){
        console.log("MInputDirective: constructor: ", this);
        console.log("MInputDirective: el: ", el.nativeElement);
    }

    ngOnInit() {
        console.log("MInputDirective: ", this);
        if(this.el.nativeElement){
            this.el.nativeElement.value = this.age;

            this.el.nativeElement.onchange = (ev: any)=>{
                console.log("ev: ", ev);
                let value = this.el.nativeElement.value;
                console.log("value: ", value);

                this.output.emit(value);
            }
        }
    }

}

