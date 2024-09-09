var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
  };

services.price = function() {
  let sum = 0;
  for (let property in this) {
      if (this.hasOwnProperty(property) && typeof this[property] !== 'function'){
          sum += parseInt(this[property]);
      }
  }
  return sum + ' грн';
};

services.minPrice = function() {
  let min = Infinity;
  for (let property in this) {
      if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
          let price = parseInt(this[property]);
          if (price <= min) {
              min = price;
          }
      }
  }
  return min + ' грн';
};

services.maxPrice = function() {
  let max = 0;
  for (let property in this) {
      if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
          let price = parseInt(this[property]);
          if (price >= max) {
              max = price;
          }
      }
  }
  return max + ' грн';
};


console.log('Загальна вартість послуг: ' + services.price());
console.log('Мінімальна вартість послуги: ' + services.minPrice());
console.log('Максимальна вартість послуги: ' + services.maxPrice());

services['Розбити скло'] = "200 грн";

console.log("ІНФОРМАЦІЯ ПІСЛЯ ДОДАННЯ ПОСЛУГИ");

console.log('Загальна вартість послуг: ' + services.price());
console.log('Мінімальна вартість послуги: ' + services.minPrice());
console.log('Максимальна вартість послуги: ' + services.maxPrice());