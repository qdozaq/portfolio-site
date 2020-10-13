export type ImgurObject = {
  id: string;
  title: string;
  link: string;
  is_album: boolean;
  description: string;
  tags: string[];
  thumbnail?: string;
}

export type Image = ImgurObject & {
  animated:boolean;
  mp4?: string;
  gifv?: string;
  is_album?: false;
}

export type Album = ImgurObject & {
  cover: string;
  images: Image[];
  is_album: true;
}

export type ImgurResponse = {
  data: Array<Image | Album>
}