import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {
    constructor(private el: ElementRef) { }

    @Input('appHover') hoverColor: string | undefined;

    @HostListener('mouseenter') mouseEnter() {
        this.hover(this.hoverColor || 'red');
    }
    @HostListener('mouseleave') mouseLeave() {
        this.hover('rgb(148 163 184)');
    }
    @HostListener('click') onMouseClick() {
        this.hover('blue');
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