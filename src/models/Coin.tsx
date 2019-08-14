import { CacheKey, Deserializer, JsonProperty, ObjectMapper, Serializer } from 'json-object-mapper';
import _ from 'lodash';
import numeral from 'numeral';

import Quote, { QuoteObject } from './Quote';

@CacheKey('QuoteSerializerDeserializer')
class QuoteSerializerDeserializer implements Deserializer, Serializer {
  deserialize = (data: object): QuoteObject => {
    const mappedPairs = _.map(data, (value, key): [string, Quote] => [key, Quote.parse(value)]);
    return _.fromPairs(mappedPairs);
  };
  serialize = (data: QuoteObject): string => JSON.stringify(data);
}

export default class Coin {
  @JsonProperty({ name: 'circulating_supply' })
  circulatingSupply?: number;
  @JsonProperty({ name: 'cmc_rank' })
  cmcRank?: number;
  @JsonProperty()
  id?: number;
  @JsonProperty({ name: 'last_updated', type: Date })
  lastUpdated?: Date;
  @JsonProperty({ name: 'max_supply' })
  maxSupply?: number;
  @JsonProperty()
  name?: string;
  @JsonProperty({ deserializer: QuoteSerializerDeserializer, name: 'quote' })
  quotes: QuoteObject = {};
  @JsonProperty()
  slug?: string;
  @JsonProperty()
  symbol?: string;

  static parse(data: object): Coin {
    return ObjectMapper.deserialize<Coin>(Coin, data);
  }

  static stringify(data: Coin): string {
    return ObjectMapper.serialize(data) as string;
  }

  public get formattedCirculatingSupply(): string {
    const number = numeral(this.circulatingSupply).format('0,0');
    return `${number} ${this.symbol}`;
  }

  public get USD(): Quote {
    return this.quotes.USD;
  }
}
