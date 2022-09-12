import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  employeeFirstName:string;
  employeeLastName:string;
  employeeID:number;
  login:boolean = false;


  myFullname:string = "Umang Poudyal";

  constructor() {
    this.employeeFirstName = "Umang";
    this.employeeLastName = "Poudyal";
    this.employeeID = 7;
  }

  public getEmployeeFirstName(): string {
    return this.employeeFirstName;
  }

  public getEmployeeLastName(): string {
    return this.employeeLastName;
  }

  public getEmployeeID(): number {
    return this.employeeID;
  }

  ngOnInit(): void {
  }


  Login() {
    this.login = !this.login;
  }

}
