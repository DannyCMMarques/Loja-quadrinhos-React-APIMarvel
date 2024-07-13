 export interface ImageCardInterface {
  index: number;
  dataCard: {
    data: {
      [key: number]: {
        id:number,
        thumbnail: {
          path: string;
          extension: string;
        };
      };
    };
  };
}
