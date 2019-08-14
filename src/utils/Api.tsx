import axios, { AxiosInstance, AxiosPromise } from 'axios';

class Api {
  private axiosClient: AxiosInstance;

  public constructor() {
    this.axiosClient = axios.create({
      baseURL: 'https://pro-api.coinmarketcap.com/v1',
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
  }

  public fetchListingsLatest = (page: number): AxiosPromise => {
    const limit = 10;

    const params = {
      limit,
      convert: 'USD,BTC',
      start: 1 + limit * (page - 1),
    };

    return this.axiosClient.get('/cryptocurrency/listings/latest', { params });
  };
}

export default new Api();
