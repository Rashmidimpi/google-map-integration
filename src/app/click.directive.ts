import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickDirective {
  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.clickOutside.emit(event);
    }
  }
}
