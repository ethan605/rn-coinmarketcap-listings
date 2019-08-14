import _ from 'lodash';
import { JsonProperty, ObjectMapper } from 'json-object-mapper';

import Quote from './Quote';

export default class ListingRecord {
  @JsonProperty()
  circulatingSupply?: number;
  @JsonProperty()
  cmcRank?: number;
  @JsonProperty()
  id?: number;
  @JsonProperty({ type: Date })
  lastUpdated?: Date;
  @JsonProperty()
  maxSupply?: number;
  @JsonProperty()
  name?: string;
  @JsonProperty()
  quote: { [key: string]: Quote } = {};
  @JsonProperty()
  slug?: string;
  @JsonProperty()
  symbol?: string;

  static parse(rawData: object[]): ListingRecord[] {
    return _.map(rawData, data => ObjectMapper.deserialize<ListingRecord>(ListingRecord, data));
  }
}
