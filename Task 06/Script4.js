class UberPriceCalculator {
    constructor(distance, duration, surgeMultiplier) {
      this.distance = distance;
      this.duration = duration;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    get distance() {
      return this._distance;
    }
  
    set distance(distance) {
      this._distance = distance;
    }
  
    get duration() {
      return this._duration;
    }
  
    set duration(duration) {
      this._duration = duration;
    }
  
    get surgeMultiplier() {
      return this._surgeMultiplier;
    }
  
    set surgeMultiplier(surgeMultiplier) {
      this._surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice() {
      const baseFare = 2.0;
      const costPerMile = 1.5;
      const costPerMinute = 0.2;
  
      const distanceCost = this.distance * costPerMile;
      const durationCost = this.duration * costPerMinute;
      const totalCost = (distanceCost + durationCost) * this.surgeMultiplier + baseFare;
  
      return totalCost;
    }
  }
  
  
  const myUberPrice = new UberPriceCalculator(10, 20, 1.5);
  
  console.log(myUberPrice.calculatePrice()); 
  
 
  myUberPrice.distance = 5;
  myUberPrice.duration = 15;
  
  console.log(myUberPrice.calculatePrice());