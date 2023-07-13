class Person {
    constructor(name, age, email) {
      this._name = name;
      this._age = age;
      this._email = email;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
     this._name = name;
   }
  
    get age() {
      return this._age;
    }
  
    set age(age) {
      this._age = age;
    }
  
    get email() {
      return this._email;
    }
  
    set email(email) {
      this._email = email;
    }
  }
  
 
  const myPerson = new Person("Nithish", 24, "nithishluhar2606@gmail.com");
  
  console.log(myPerson.name); 
  console.log(myPerson.age);  
  console.log(myPerson.email); 

  myPerson.name = " Rahul";
  myPerson.email = "rahulluhar2606@gmail.com";
  
  console.log(myPerson.name);  
  console.log(myPerson.email);