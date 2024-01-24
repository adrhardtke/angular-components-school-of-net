import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../services/employee.service';
import { SalaryColorDirective } from '../directives/salary-color.directive';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { AlertSuccessComponent } from '../alert-success/alert-success.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { MyCurrencyPipe } from '../pipes/my-currency.pipe';

@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [CommonModule, SalaryColorDirective, EmployeeNewModalComponent, AlertSuccessComponent, EmployeeEditModalComponent, MyCurrencyPipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal!: EmployeeNewModalComponent


  @ViewChild(EmployeeEditModalComponent)
  employeeEditModal!: EmployeeEditModalComponent

  employee!: Employee;
  showMessageSuccess = false;


  employeeToEdit!: Employee;

  employees: Employee[] = this.employeeService.employees
  constructor(private employeeService: EmployeeService){

  }

  ngOnInit(): void {
    this.employeeNewModal.show()
  }

  openNewModal(): void {
    this.employeeNewModal.show()
  }

  openEditModal(employee: Employee): void {
    this.employeeToEdit = employee
    this.employeeEditModal.show()
  }

  onNewEmployee(employee: Employee): void {
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee): void {
    console.log(employee)
  }
}
