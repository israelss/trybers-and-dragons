import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1: Character = new Character('player1');
const player2: Character = new Character('player2');
const player3: Character = new Character('player3');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1: Monster = new Monster();
const monster2: Dragon = new Dragon();

const pvp: PVP = new PVP(player2, player3);

const pve: PVE = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => battle.fight());
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};