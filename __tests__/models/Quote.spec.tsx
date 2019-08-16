import _ from 'lodash';

// Models
import Coin from 'src/models/Coin';
import Quote from 'src/models/Quote';

// Fixtures
import listingsLatestFixtures from '../fixtures/listings_latest.json';

describe('Models - Quote', () => {
  const quotes = Coin.parse(listingsLatestFixtures.data[0]).quotes;

  it('should be parsed correctly', () => {
    expect(typeof quotes).toEqual('object');
    expect(_.isObject(quotes)).toBeTruthy();
    _.each(quotes, quote => expect(quote instanceof Quote).toBeTruthy());
    expect(_.keys(quotes)).toEqual(['USD']);
  });

  it('should be stringified correctly', () => {
    _.each(quotes, quote => {
      const stringified = Quote.stringify(quote);
      expect(typeof stringified).toEqual('string');
      const reparsed = JSON.parse(stringified);
      expect(typeof reparsed).toEqual('object');
      expect(_.isObject(reparsed)).toBeTruthy();
    });
  });

  it('should have proper getters', () => {
    const marketCap = quotes.USD.formattedMarketCap;
    const price = quotes.USD.formattedPrice;
    const change24h = quotes.USD.formattedChange24h;
    const volume24h = quotes.USD.formattedVolume24h;

    expect(marketCap).toEqual('$211,491,230,430.49');
    expect(price).toEqual('$11,836.40');
    expect(change24h).toEqual('-19.60%');
    expect(volume24h).toEqual('$18,087,681,383.36');
  });
});
