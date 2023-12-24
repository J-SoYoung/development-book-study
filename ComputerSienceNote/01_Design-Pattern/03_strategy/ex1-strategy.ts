class Hero {
  constructor(public name: string, public weapon?: string) {}
}

class Avengers {
  private ensemble: Hero[] = [];
  
  private blast(hero: Hero) {
    console.log(`${hero.name} blasted ${hero.weapon}`);
  }
  
  private kickAndPunch(hero: Hero) {
    console.log(`${hero.name} kicked and punched`);
  }
  
  private shoot(hero: Hero) {
    console.log(`${hero.name} shot ${hero.weapon}`);
  }
  
  private throw(hero: Hero) {
    console.log(`${hero.name} threw ${hero.weapon}`);
  }
  
  recruit(hero: Hero) {
    this.ensemble = this.ensemble
      .filter(({name}) => name === hero.name)
    	.concat(hero);
  }
  
  fight() {
    this.ensemble.forEach(hero => this.attack(hero));
  }
  
  attack(hero: Hero) {
    switch(hero.name) {
      case 'Iron Man':
        this.blast(hero);
        break;
      case 'Captain America':
      case 'Thor':
        this.throw(hero);
        break;
      case 'The Hulk':
        this.kickAndPunch(hero);
        break;
      case 'Black Widow':
        hero.weapon ? this.shoot(hero) : this.kickAndPunch(hero);
        break;
      case 'Hawkeye':
        this.shoot(hero);
        break;
      default:
        console.warn('Unknown Avenger: ' + hero.name);
    }
  }
}

// 함수 정의
function runAvengersExample() {
  const avengers = new Avengers();

  const ironMan = new Hero('Iron Man', 'Repulsor Beams');
  const captainAmerica = new Hero('Captain America', 'Shield');
  const hulk = new Hero('The Hulk');
  const blackWidow = new Hero('Black Widow', 'Pistol');
  const thor = new Hero('Thor', 'Mjolnir');
  const hawkeye = new Hero('Hawkeye', 'Bow and Arrows');

  // avengers.recruit(ironMan);
  avengers.recruit(captainAmerica);
  // avengers.recruit(hulk);
  // avengers.recruit(blackWidow);
  // avengers.recruit(thor);
  // avengers.recruit(hawkeye);

  avengers.fight();
}

// 함수 실행
runAvengersExample();