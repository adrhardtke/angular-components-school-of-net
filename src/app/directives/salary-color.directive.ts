import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[salaryColor]',
  standalone: true
})
export class SalaryColorDirective implements OnInit {
  @Input()
  salaryColor!: string;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {      
    const { nativeElement }: { nativeElement: HTMLElement} = this.element
    const salaryColor = parseFloat(this.salaryColor)
    nativeElement.style.color = salaryColor > 20 ? 'green' : 'red'
  }

}
