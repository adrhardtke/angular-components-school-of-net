import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]',
  standalone: true
})
export class SalaryColorDirective {

  constructor(private element: ElementRef) {
  }


  @Input()
  set salaryColor(value: number){
    const { nativeElement }: { nativeElement: HTMLElement} = this.element
    // const salaryColor = parseFloat(value)
    nativeElement.style.color = value > 20 ? 'green' : 'red'
  }

}
