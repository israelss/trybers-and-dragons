import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public enemies: Array<Fighter | SimpleFighter>;

  constructor(player: Fighter, enemies: Array<Fighter | SimpleFighter>) {
    super(player);
    this.enemies = enemies;
  }

  public fight(): number {
    if (this.player.lifePoints < 0) return -1;

    this.enemies.forEach((enemy) => {
      if (this.player.lifePoints < 0) return;
      this.player.attack(enemy);
      if (enemy.lifePoints < 0) return;
      enemy.attack(this.player);
    });

    return super.fight();
  }
}