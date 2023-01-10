import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL="http://localhost:8080/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(){
    return this.httpClient.get(this.baseURL);
  }

  addEmployee(employ: any){
    return this.httpClient.post(this.baseURL, employ);
  }

  getEmployeeById(id: number){
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee){
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number){
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
