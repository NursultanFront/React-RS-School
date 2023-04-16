import axios from 'axios';
import CharacterRest from './character/index';

class Api {
  private readonly endpoint;
  public character;

  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.character = new CharacterRest(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: 'https://rickandmortyapi.com/api/',
      headers: {
        'Content-Type': 'application/json',
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : '{}')],
    });
  }
}

export const api = new Api();
