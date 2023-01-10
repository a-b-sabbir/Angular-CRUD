import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  emp: Employee = new Employee();
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.employeeService.addEmployee(this.emp).subscribe(data => {this.emp = data});
    this.router.navigate(['/employees']);
  }
  onSubmit() {
    console.log(this.emp);
    this.saveEmployee();
  }

}
