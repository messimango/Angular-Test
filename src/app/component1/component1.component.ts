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



  
  
  button:boolean = false;

  age:number = 5;

  color:string = "red";

  employees = [
    {
      id:12,
      name:"Umang"
    },
    {
      id:45,
      name:"Joseph"
    },
    {
      id:19,
      name:"Katie"
    },
    {
      id:4,
      name:"Byron"
    },
    {
      id:8,
      name:"Jamal"
    },
  ]

  myFirstName:string = "Umang"

  fruits = [
    {
      fruitName: "Apple",
      fruitPrice: 1.992,
      productNumber: 254135
    },
    {
      fruitName: "Peach",
      fruitPrice: 0.5,
      productNumber: 154135
    },
    {
      fruitName: "Watermelon",
      fruitPrice: 3.456,
      productNumber: 487135
    },
    {
      fruitName: "Orange",
      fruitPrice: 0.250,
      productNumber: 325135
    },
    {
      fruitName: "Pineapple",
      fruitPrice: 4,
      productNumber: 745135
    },
    {
      fruitName: "Durian",
      fruitPrice: 12,
      productNumber: 241135
    }
  ];

  date = new Date();

  pressButton() {
    this.button = true;
  }

}
