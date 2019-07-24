import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isDown: boolean;

  @HostListener('click') swapState() {
    this.isDown = !this.isDown;
    if (this.isDown) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
}
