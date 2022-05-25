import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;

  constructor(
    name: string,
  ) {
    this._race = new Elf(name, getRandomInt(1, 10));
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._dexterity = this._race.dexterity;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  special(enemy: SimpleFighter): void {
    console.log(`
    No special move for ${this._archetype} discovered yet!
    Keep training to reach ${enemy.strength}!
  `);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this.maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this.lifePoints < 1) this._lifePoints = -1;
    return this.lifePoints;
  }
}