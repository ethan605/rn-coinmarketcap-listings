/* global __DEV__ */

import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';
import humps from 'humps';

// Data
import configs from 'src/data/coinmarketcap.json';

interface CoinMarketCapApi {
  apiKey: string;
  baseUri: string;
}

interface Configs {
  pro: CoinMarketCapApi;
  sandbox: CoinMarketCapApi;
}

class Api {
  private axiosClient: AxiosInstance;

  public constructor() {
    const { pro, sandbox } = humps.camelizeKeys(configs) as Configs;
    const { apiKey, baseUri } = __DEV__ ? sandbox : pro;

    this.axiosClient = axios.create({
      baseURL: baseUri,
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors = (): void => {
    this.axiosClient.interceptors.request.use(
      (config): AxiosRequestConfig => {
        console.debug('Axios request', config.url, config);
        return config;
      },
      (error): Promise<void> => {
        return Promise.reject(error);
      }
    );

    this.axiosClient.interceptors.response.use(
      (response): AxiosResponse => {
        console.debug('Axios response', response.config.url, response.data);
        return response;
      },
      (error): Promise<void> => {
        return Promise.reject(error);
      }
    );
  };

  public fetchListingsLatest = (page: number): AxiosPromise => {
    const limit = 20;

    const params = {
      limit,
      start: 1 + limit * (page - 1),
    };

    return this.axiosClient.get('/cryptocurrency/listings/latest', { params });
  };
}

export default new Api();
