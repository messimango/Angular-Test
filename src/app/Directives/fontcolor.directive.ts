import { Directive, ElementRef } from "@angular/core"; 

@Directive({
    selector: '[setRedColor]'
})
export class RedColorDirective{
    constructor(element: ElementRef){
        element.nativeElement.style.color = "#FF0000"
    }
}