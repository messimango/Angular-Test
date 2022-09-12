import { Directive, ElementRef } from "@angular/core"; 

@Directive({
    selector: '[setBlueColor]'
})

export class BlueColorDirective{
    constructor(element: ElementRef){
        element.nativeElement.style.color = "#0000FF"
    }
}