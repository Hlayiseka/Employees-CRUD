import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  title = '';
  employees = [
    {name:"Collins", surname:"Mathebula", gender:"male", cell:"0711220982", email:"hlayisekacm@gmail.com", organisationalUnit:"91", bio:" ", image:" "},
    
  ];
  
  model:any={};
  model2:any={};
  addEmployee() {
    this.employees.push(this.model);
    this.model = {};

  }
  deleteEmployee(i){
    this.employees.splice(i,1);
    console.log(i);

  }
  myValue;
  editEmployee(y){
    this.model2.name = this.employees[y].name;
    this.model2.surname = this.employees[y].surname;
    this.model2.gender = this.employees[y].gender;
    this.model2.cellPhone = this.employees[y].cell;
    this.model2.emailAddress = this.employees[y].email;
    this.model2.organisationalUnit = this.employees[y].organisationalUnit;
    this.model2.bio = this.employees[y].bio;
    this.model2.image = this.employees[y].image;
    this.myValue = y;

  }
  updateEmployee(){
    let y = this.myValue;
    for(let i = 0; i < this.employees.length; i++){
      if(i==y){
        this.employees[i]= this.model2;
        this.model2 = {};
      }
    }
  }
  
}
