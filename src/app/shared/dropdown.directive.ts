import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen: boolean;

  @HostListener('click') swapState() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
}
