import { Character, Creator, Image, Price, Story, TextObject, Url } from "./pages/page-home";

export interface DataItemInterface {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  name:string;
  upc: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: {
    resourceURI: string;
    name: string;
  };
  dates: Date[];
  prices: Price[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: Image[];
  creators: {
    available: number;
    collectionURI: string;
    items: Creator[];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: Character[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
  };
}
