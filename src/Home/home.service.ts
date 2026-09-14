import { Injectable, NotFoundException } from '@nestjs/common';
import { levels } from 'src/Home/levels';
interface UserInterface {
  id: number;
  email: string;
  username: string;
}
// export interface StatsInterface {
//   id: number;
//   attributes: {
//     foco: number;
//     obsessao: number;
//     disciplina: number;
//     raciocinio: number;
//     mentalidade: number;
//   };
//   rank: string;
//   currentXp: number;
//   user?: any;
// }

@Injectable()
export class HomeService {
  constructor() {}

  async getProfileData(emailParam: string) {
    // const query = await this.db.query(
    //   'SELECT id  , email , username FROM users WHERE email = $1',
    //   [emailParam],
    // );
    // if (!query || !query.rowCount)
    //   throw new NotFoundException('Dados não encontrados.');
    // const res: UserInterface = query.rows[0];
    // const { email, id, username } = res;
    // const getStats = await this.db.query(
    //   'SELECT * FROM stats WHERE user_id = $1',
    //   [id],
    // );
    // return {
    //   username,
    // };
  }

  async GetStats(stats) {
    // const currentLevel =
    //   levels.findLast((lv) => data[0].currentXp >= lv.xp) || levels[0];
    // const nextLevel = levels.find((lv) => lv.level === currentLevel.level + 1);
    // const { currentXp, rank, attributes } = data[0];
    // return {
    //   currentLevel: currentLevel.level,
    //   nextLevel: nextLevel,
    //   currentXp,
    //   rank,
    //   attributes,
    // };
  }
}
