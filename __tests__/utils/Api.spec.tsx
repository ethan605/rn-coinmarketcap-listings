import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

// Utils
import Api from 'src/utils/Api';

// Fixtures
import listingsLatestFixtures from '../fixtures/listingsLatest.json';

/* eslint-disable @typescript-eslint/ban-ts-ignore */

describe('Utils - Api', () => {
  const mock = new AxiosMockAdapter(axios);
  mock.onGet('/cryptocurrency/listings/latest').reply(200, listingsLatestFixtures);

  it('should invoke interceptors when success', async () => {
    await Api.fetchListingsLatest(1);
    // @ts-ignore
    const debugCalls = console.debug.mock.calls;
    expect(debugCalls.length).toEqual(2);
    expect(debugCalls[0][0]).toEqual('Axios request fired');
    expect(debugCalls[1][0]).toEqual('Axios response received');
  });

  mock.resetHandlers();
  mock.onGet('/cryptocurrency/listings/latest').reply(400, { status: 'failed' });

  it('should invoke interceptors when error', async () => {
    try {
      await Api.fetchListingsLatest(1);
      // @ts-ignore
      const debugCalls = console.debug.mock.calls;
      expect(debugCalls.length).toEqual(4);
      expect(debugCalls[2][0]).toEqual('Axios request error');
      expect(debugCalls[3][0]).toEqual('Axios response error');
    } catch (error) {
      expect(error).not.toBeNull();
    }
  });
});
