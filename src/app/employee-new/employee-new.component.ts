import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-new',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-new.component.html',
  styleUrl: './employee-new.component.scss'
})
export class EmployeeNewComponent {
  name: string = ''
  salary: number = 0

  constructor(private employeeService: EmployeeService){}

  addEmployee(){
    this.employeeService.addEmployee({
      name: this.name,
      salary: this.salary,
      bonus: 0
    })
    this.name = ''
  }

  getOutlineColor(){
    return this.salary > 10 ? '1px solid red' : null
  }
}
