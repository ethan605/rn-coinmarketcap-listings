import _ from 'lodash';
import { CacheKey, Deserializer, JsonProperty, ObjectMapper, Serializer } from 'json-object-mapper';

import Quote, { QuoteObject } from './Quote';

@CacheKey('QuoteSerializerDeserializer')
class QuoteSerializerDeserializer implements Deserializer, Serializer {
  deserialize = (data: object): QuoteObject => {
    const mappedPairs = _.map(data, (value, key): [string, Quote] => [key, Quote.deserialize(value)]);
    return _.fromPairs(mappedPairs);
  };
  serialize = (data: QuoteObject): object => {
    const mappedPairs = _.map(data, (value, key): [string, Quote] => [key, Quote.serialize(value)]);
    return _.fromPairs(mappedPairs);
  };
}

export default class ListingRecord {
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
  @JsonProperty({ deserializer: QuoteSerializerDeserializer, serializer: QuoteSerializerDeserializer })
  quote: QuoteObject = {};
  @JsonProperty()
  slug?: string;
  @JsonProperty()
  symbol?: string;

  static deserialize(rawData: object[]): ListingRecord[] {
    return _.map(rawData, data => ObjectMapper.deserialize<ListingRecord>(ListingRecord, data));
  }
}
