import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Employee, EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'employee-new-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-new-modal.component.html',
  styleUrl: './employee-new-modal.component.scss'
})
export class EmployeeNewModalComponent {
    employee: Employee = {
        name: '',
        salary: 0,
        bonus: 0,
    };

    @Output()
    onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

    constructor(private element: ElementRef, private employeeService: EmployeeService) {
    }

    ngOnInit() {
    }

    addEmployee() {
        const copy = Object.assign({}, this.employee);
        this.employeeService.addEmployee(copy);
        this.onSubmit.emit(copy);
        this.hide();
    }

    hide() {
        const divModal = this.getDivModal();
        $(divModal).modal('hide');
    }

    show() {
        const divModal = this.getDivModal();
        $(divModal).modal('show');
    }

    private getDivModal(): HTMLElement {
        const nativeElement: HTMLElement = this.element.nativeElement;
        return nativeElement.firstChild?.firstChild as HTMLElement;
    }
}
