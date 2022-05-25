import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  public enemy: Fighter;

  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this.enemy = enemy;
  }

  public fight(): number {
    if (this.player.lifePoints < 1) return -1;

    this.player.attack(this.enemy);
    if (this.enemy.lifePoints < 1) return 1;

    this.enemy.attack(this.player);
    if (this.player.lifePoints !== -1 || this.enemy.lifePoints !== -1) {
      return this.fight();
    }
    return super.fight();
  }
}