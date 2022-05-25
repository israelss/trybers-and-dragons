import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this.enemy = enemy;
  }

  public fight(): number {
    if (this.player.lifePoints < 0) return -1;

    this.player.attack(this.enemy);
    if (this.enemy.lifePoints < 0) return 1;

    this.enemy.attack(this.player);
    return super.fight();
  }
}