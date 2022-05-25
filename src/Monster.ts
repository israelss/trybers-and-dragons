import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (this.lifePoints < 1) this._lifePoints = -1;
    return this.lifePoints;
  }
}