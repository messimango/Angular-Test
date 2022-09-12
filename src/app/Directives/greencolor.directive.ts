import { Directive, ElementRef } from "@angular/core"; 

@Directive({
    selector: '[setGreenColor]'
})
export class GreenColorDirective{
    constructor(element: ElementRef){
        element.nativeElement.style.color = "#00FF00"
    }
}