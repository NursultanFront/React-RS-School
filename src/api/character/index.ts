import { type AxiosInstance } from 'axios';
import { type Character } from './types';
import { BasicRest } from '../basic-rest';
import { List } from 'api/types';

export default class CharacterRest extends BasicRest {
  private urlName = 'character';

  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public list() {
    return this.getRequest<List<Character>>(this.urlName);
  }

  public searchName(value?: string, params?: { status: string }) {
    return this.getRequest<List<Character>>(`${this.urlName}/?name=${value}`, params);
  }

  public getOneCharacter(id: number) {
    return this.getRequest<Character>(`${this.urlName}/${id}`);
  }
}
