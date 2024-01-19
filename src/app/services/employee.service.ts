import { Injectable } from '@angular/core';

export interface Employee {
  name: string
  salary: number
  bonus: number
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employees: Employee[] = []

  constructor() {

  }

  addEmployee(employee: Employee){
    this.employees.push({
      name: employee.name,
      salary: employee.salary,
      bonus: employee.bonus
    })
  }
}
