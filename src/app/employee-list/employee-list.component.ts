import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../services/employee.service';
import { SalaryColorDirective } from '../directives/salary-color.directive';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [CommonModule, SalaryColorDirective, EmployeeNewModalComponent],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal!: EmployeeNewModalComponent

  employees: Employee[] = this.employeeService.employees
  constructor(private employeeService: EmployeeService){

  }

  ngOnInit(): void {
    this.employeeNewModal.show()
  }

  openNewModal(): void {
    this.employeeNewModal.show()
  }
}
