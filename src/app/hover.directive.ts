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
        this.hover(this.hoverColor || 'red');
    }
    @HostListener('mouseleave') mouseLeave() {
        this.hover('rgb(148 163 184)');
    }
    
    
    private hover(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
        if (color === 'rgb(148 163 184)') {
            this.el.nativeElement.style.color = 'black';
        } else {
            this.el.nativeElement.style.color = 'white';
        }
    }
}