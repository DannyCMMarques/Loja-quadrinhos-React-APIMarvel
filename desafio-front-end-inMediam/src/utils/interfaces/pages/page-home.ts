export interface Comic {
  dataItem: any;
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
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

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface Date {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface Image {
  path: string;
  extension: string;
}

export interface Creator {
  id: number;
  resourceURI: string;
  name: string;
  role: string;
}

export interface Character {
  id: number;
  resourceURI: string;
  name: string;
}

export interface Story {
  id: number;
  resourceURI: string;
  name: string;
  type: string;
}

export interface Event {
  resourceURI: string;
  name: string;
}

export interface CardBannerItemProps {
  dataItem: Comic;
}
