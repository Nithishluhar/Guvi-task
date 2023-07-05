class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    toString() {
      return "Circle: radius={this.radius}, color={this.color}";
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  
  const myCircle = new Circle();
  console.log(myCircle.getRadius());                // Output: 1
  console.log(myCircle.getColor());                 // Output: red
  console.log(myCircle.getArea());                  // Output: 3.141592653589793
  console.log(myCircle.getCircumference());         // Output: 6.283185307179586
  console.log(myCircle.toString());                 // Output: Circle: radius=1, color=red
  
  myCircle.setRadius(2.5);
  myCircle.setColor("blue");
  console.log(myCircle.getRadius());                // Output: 2.5
  console.log(myCircle.getColor());                 // Output: blue
  console.log(myCircle.getArea());                  // Output: 19.634954084936208
  console.log(myCircle.getCircumference());         // Output: 15.707963267948966
  console.log(myCircle.toString()); 
