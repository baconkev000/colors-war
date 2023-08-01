import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {
    // changes the backround color of any element hovered with this directive
    // @param color: string
    constructor(private el: ElementRef) { }

    @Input('appHover') hoverColor: string | undefined;

    @HostListener('mouseenter') mouseEnter() {
        this.hover(this.hoverColor || 'white');
    }
    @HostListener('mouseleave') mouseLeave() {
        this.hover('white');
    }
    
    
    private hover(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
        if (color === 'white') {
            this.el.nativeElement.style.color = 'black';
        } else {
            this.el.nativeElement.style.color = 'white';
        }
    }
}