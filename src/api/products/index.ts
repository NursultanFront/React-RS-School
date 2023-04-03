import { type AxiosInstance } from 'axios';
import { BasicRest } from '../../api/basic-rest';

export default class Product extends BasicRest {
  urlName = 'products';

  public constructor(endpoint: AxiosInstance) {
    super(endpoint);
  }

  public search(params: { q: string }) {
    return this.getRequest(`${this.urlName}/search?`, params);
  }
}
