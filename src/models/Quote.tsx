import { JsonProperty, ObjectMapper } from 'json-object-mapper';

export type QuoteObject = { [key: string]: Quote };

export default class Quote {
  @JsonProperty({ name: 'last_updated', type: Date })
  lastUpdated?: Date;
  @JsonProperty({ name: 'market_cap' })
  marketCap?: number;
  @JsonProperty({ name: 'percent_change_1h' })
  percentChange1h?: number;
  @JsonProperty({ name: 'percent_change_24h' })
  percentChange24h?: number;
  @JsonProperty({ name: 'percent_change_7d' })
  percentChange7d?: number;
  @JsonProperty()
  price?: number;
  @JsonProperty({ name: 'volume_24h' })
  volume24h?: number;

  static deserialize(data: object): Quote {
    return ObjectMapper.deserialize<Quote>(Quote, data);
  }

  static serialize(data: Quote): object {
    return ObjectMapper.serialize(data);
  }
}
