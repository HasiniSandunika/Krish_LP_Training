class Employee{
  constructor(id, name, position){
    this.id = id;
    this.name=name;
    this.position=position;
  }
  getId(){ 
    return this.id; 
  } 
  getName(){ 
    return this.name; 
  } 
  getPosition(){ 
    return this.position; 
  } 
} 

 class EmployeeSalary extends Employee{
   constructor(id, name, position, hours, baseSalary){
     super(id, name, position);
     this.hours=hours;
     this.baseSalary=baseSalary;
     this.addition=0;
     this.salary=0;
   }
  getBaseSalary(){ 
    return this.baseSalary; 
  } 
  getHours(){ 
    return this.hours; 
  }
  setAddition(addition){
    this.addition=addition;
  }
  getAddition(){
    return this.addition;
  }
  calculateSalary(){
    this.salary=this.addition+this.baseSalary;
  }
 }
 
 let employeeSalary=new EmployeeSalary("0001", "Hasini", "ASE", 200, 5000);
 console.log(employeeSalary);

/////////////////////////////////////////////////////////////////////////////////

 class EmployeeSalaryHandler { 
   setSuccessor(successor){}
   addSalary(employeeSalary){
   }
} 

class Level1 extends EmployeeSalaryHandler{
  setSuccessor(next){ 
    this.successor = next; 
  } 
  addSalary(employeeSalary) { 
    if (employeeSalary.getHours() <= 180){
      employeeSalary.calculateSalary();
      return 0;
    }
      employeeSalary.setAddition(employeeSalary.getBaseSalary()*0.3);
      if (employeeSalary.getHours() > 180 && employeeSalary.getHours() <= 200){
        employeeSalary.calculateSalary();
        return employeeSalary.getAddition();
      }             
            
        else
            return this.successor.addSalary(employeeSalary);
  } 
} 
  
class Level2 extends EmployeeSalaryHandler { 
  setSuccessor(next){ 
    this.successor = next; 
  } 
  addSalary(employeeSalary) { 
    if(employeeSalary.getHours()>200 && employeeSalary.getHours()<=220){        
            employeeSalary.setAddition(employeeSalary.getAddition()+1000);
            employeeSalary.calculateSalary();
            return employeeSalary.getAddition();
      }
      else{
            employeeSalary.setAddition(employeeSalary.getAddition()+1000);
            return this.successor.addSalary(employeeSalary);
      }
  } 
} 

class Level3 extends EmployeeSalaryHandler{  
  setSuccessor(next){ 
    this.successor = next; 
  } 
  addSalary(employeeSalary) { 
    employeeSalary.setAddition(employeeSalary.getAddition()+2000);
    employeeSalary.calculateSalary();
    return employeeSalary.getAddition();
  } 
} 

var level1 = new Level1(); 
var level2 = new Level2(); 
var level3 = new Level3(); 
level1.setSuccessor(level2); 
level2.setSuccessor(level3); 
employeeSalary1=new EmployeeSalary("0001", "Hasini", "ASE", 200, 5000);
employeeSalary2=new EmployeeSalary("0002", "Hasini", "SE", 250, 6000);
employeeSalary3=new EmployeeSalary("0003", "Hasini", "AQA", 150, 5000);
employeeSalary4=new EmployeeSalary("0004", "Hasini", "QA", 210, 6000);
level1.addSalary(employeeSalary1); 
level1.addSalary(employeeSalary2); 
level1.addSalary(employeeSalary3); 
level1.addSalary(employeeSalary4); 
console.log(employeeSalary1);
console.log(employeeSalary2);
console.log(employeeSalary3);
console.log(employeeSalary4);