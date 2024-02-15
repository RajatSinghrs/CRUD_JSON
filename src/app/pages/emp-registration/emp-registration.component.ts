import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-registration',
  templateUrl: './emp-registration.component.html',
  styleUrls: ['./emp-registration.component.css']
})
export class EmpRegistrationComponent implements OnInit{

  isListView:boolean = true;  
  departments : any[]=[];
  empList: any[]=[];
  employeeObject: any ={
    "firstName":"",
    "lastName": "",
    "departmentId":"",
    "gender":"",
    "email":"",
    "phoneNo.": ""
  }
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadDepartments(){
    this.http.get("assets/departments.json").subscribe((res:any)=>{
      this.departments = res.data;
      console.log(this.departments)
    })
  }
  loadEmployees(){
    this.http.get("assets/getEmployee.json").subscribe((res:any)=>{
      this.empList = res.data;
      console.log(this.empList)
    })
  }
}
