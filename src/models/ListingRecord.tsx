import humps from 'humps';

import { Quote } from './Quote';

export interface ListingRecord {
  circulatingSupply: number;
  cmcRank: number;
  id: number;
  lastUpdated: string;
  maxSupply: number;
  name: string;
  quote: { [key: string]: Quote };
  slug: string;
  symbol: string;
}

export default function parseListingRecords(rawData: object[]): ListingRecord[] {
  return humps.camelizeKeys(rawData) as ListingRecord[];
}
