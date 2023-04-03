import axios from 'axios';
import Product from './products/index';

class Api {
  private readonly endpoint;
  public products;

  public constructor() {
    this.endpoint = Api.createEndpoint();
    this.products = new Product(this.endpoint);
  }

  private static createEndpoint() {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      transformRequest: [(data) => JSON.stringify(data)],
      transformResponse: [(data) => JSON.parse(data ? data : '{}')],
    });
  }
}

export const api = new Api();
