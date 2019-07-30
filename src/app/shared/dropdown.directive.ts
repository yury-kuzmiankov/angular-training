import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') swapState() {
    this.isOpen = !this.isOpen;
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }
}
