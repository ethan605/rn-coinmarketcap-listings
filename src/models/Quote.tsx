import { JsonProperty, ObjectMapper } from 'json-object-mapper';
import numeral from 'numeral';

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

  static parse(data: object): Quote {
    return ObjectMapper.deserialize<Quote>(Quote, data);
  }

  static stringify(data: Quote): string {
    return ObjectMapper.serialize(data) as string;
  }

  public get formattedMarketCap(): string {
    return numeral(this.marketCap).format('$0,0.00');
  }

  public get formattedPrice(): string {
    return numeral(this.price).format('$0,0.00');
  }

  public get formattedChange24h(): string {
    return numeral(this.percentChange24h).format('0,0.00%');
  }

  public get formattedVolume24h(): string {
    return numeral(this.volume24h).format('$0,0.00');
  }
}
