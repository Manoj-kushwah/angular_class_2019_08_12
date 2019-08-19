import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: 'h1',
})
export class MInputDirective implements OnInit {

    private title: string = "Date time.";

    constructor(private el: ElementRef){
        console.log("MInputDirective: constructor: ", this);
        console.log("MInputDirective: el: ", el.nativeElement);
    }

    ngOnInit() {
        console.log("MInputDirective: ", this);
    }
}

