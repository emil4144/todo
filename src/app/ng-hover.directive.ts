import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[NgHover]'
})
export class NgHoverDirective {
  
  @Input(`NgHover`)classap
  constructor(private renderer:Renderer2,private element:ElementRef) { }
  @HostListener('mouseover')
  onHver(){  
   this.renderer.addClass(this.element.nativeElement,this.classap);
  }
  @HostListener('mouseleave')
  onleave(){    
    this.renderer.removeClass(this.element.nativeElement,this.classap);
  }

}
