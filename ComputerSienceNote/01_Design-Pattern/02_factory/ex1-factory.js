class Fruit {
  constructor(color) {
    this.color = color;
  }

  displayColor() {
    console.log(`This fruit is ${this.color}.`);
  }
}


class Apple extends Fruit {
  constructor(color, taste) {
    super(color);
    this.taste = taste;
  }

  displayTaste() {
    console.log(`This apple tastes ${this.taste}.`);
  }
}

class Orange extends Fruit {
  constructor(color, sweetness) {
    super(color);
    this.sweetness = sweetness;
  }

  displaySweetness() {
    console.log(`This orange is ${this.sweetness} sweet.`);
  }
}

const fruitFactory = (type, color, additionalValue) => {
  if (type === 'apple') {
    return new Apple(color, additionalValue);
  } else if (type === 'orange') {
    return new Orange(color, additionalValue);
  }
};

const apple = fruitFactory('apple', 'red', 'sweet');
apple.displayColor();   
apple.displayTaste(); 

const orange = fruitFactory('orange', 'orange', 'very');
orange.displayColor();   
orange.displaySweetness()
