import _ from 'lodash';

// Models
import Coin from 'src/models/Coin';
import Quote from 'src/models/Quote';

// Fixtures
import listingsLatestFixtures from '../fixtures/listingsLatest.json';

describe('Models - Coin', () => {
  const coins = _.map(listingsLatestFixtures.data, Coin.parse);

  it('should be parsed correctly', () => {
    expect(coins.length).toEqual(10);
    _.each(coins, coin => expect(coin instanceof Coin).toBeTruthy());
    expect(_.map(coins, 'symbol')).toEqual(['BTC', 'ETH', 'XRP', 'BCH', 'LTC', 'USDT', 'BNB', 'EOS', 'BSV', 'XMR']);
  });

  it('should be stringified correctly', () => {
    _.each(coins, coin => {
      const stringified = Coin.stringify(coin);
      expect(typeof stringified).toEqual('string');
      const reparsed = JSON.parse(stringified);
      expect(typeof reparsed).toEqual('object');
      expect(_.isObject(reparsed)).toBeTruthy();
    });
  });

  it('should have proper getters', () => {
    const allCirculatingSupplies = _.map(coins, 'formattedCirculatingSupply');
    expect(allCirculatingSupplies).toEqual([
      '17,867,862 BTC',
      '107,258,568 ETH',
      '42,872,646,068 XRP',
      '17,939,050 BCH',
      '63,005,093 LTC',
      '4,043,425,265 USDT',
      '129,175,490 BNB',
      '926,829,906 EOS',
      '17,854,986 BSV',
      '17,146,343 XMR',
    ]);

    const allUSDs = _.map(coins, 'USD');
    _.each(allUSDs, USD => expect(USD instanceof Quote).toBeTruthy());
  });
});
