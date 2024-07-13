 export interface ImageCardInterface {
  index: number;
  dataCard: {
    data: {
      [key: number]: {
        thumbnail: {
          path: string;
          extension: string;
        };
      };
    };
  };
}
