/*
Execute an Employee class, that describes a worker, and create an array of all bank staff.
*/

class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    
    displayInfo() {
      console.log(`Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`);
    }
  }

  const bankStaff = [
    new Employee('Hana Berisha', 'Bank Manager', 80000),
    new Employee('Lea Gashi', 'Loan Officer', 60000),
    new Employee('Art Krasniqi', 'Customer Service Representative', 45000),
    new Employee('Dea Hana', 'Teller', 40000),
  ];
  
  console.log("Bank Staff Information:");
  bankStaff.forEach(employee => {
    employee.displayInfo();
  });
  