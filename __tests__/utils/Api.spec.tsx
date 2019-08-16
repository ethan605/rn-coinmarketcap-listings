import AxiosMockAdapter from 'axios-mock-adapter';

// Utils
import Api from 'src/utils/Api';

// Fixtures
import listingsLatestFixtures from '../fixtures/listings_latest.json';

describe('Utils - Api', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const mock = new AxiosMockAdapter(Api.axiosClient);

  beforeEach(() => mock.resetHandlers());

  it('should invoke interceptors when success', async () => {
    mock.onGet('/cryptocurrency/listings/latest').reply(200, listingsLatestFixtures);

    const { data } = await Api.fetchListingsLatest(1);
    expect(data.data.length).toEqual(10);

    const debugCalls = jest.spyOn(console, 'debug').mock.calls;
    expect(debugCalls.length).toEqual(2);
    expect(debugCalls[0][0]).toEqual('Axios request fired');
    expect(debugCalls[1][0]).toEqual('Axios response received');
  });

  it('should invoke interceptors when error', async () => {
    mock.onGet('/cryptocurrency/listings/latest').reply(400, { status: 'failed' });

    try {
      await Api.fetchListingsLatest(1);
    } catch (error) {
      expect(error).not.toBeNull();
      expect(error.response.data).toEqual({ status: 'failed' });

      const debugCalls = jest.spyOn(console, 'debug').mock.calls;
      expect(debugCalls.length).toEqual(4);
      expect(debugCalls[2][0]).toEqual('Axios request fired');
      expect(debugCalls[3][0]).toEqual('Axios response error');
    }
  });
});
