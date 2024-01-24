import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../services/employee.service';
import { FormsModule } from '@angular/forms';

declare const $: any;

@Component({
  selector: 'employee-edit-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-edit-modal.component.html',
  styleUrl: './employee-edit-modal.component.scss'
})
export class EmployeeEditModalComponent {
    @Input()
    employee!: Employee;

    @Output()
    onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
    }

    addEmployee() {
        const copy = Object.assign({}, this.employee);
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
