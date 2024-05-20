export enum ContentType {
  text,
  video,
  img,
}
export interface Img {
  src: string;
  style: string;
}

export interface Box {
  title?: string;
  src?: string;
  subtitle?: string;
  text?: string[];
}

export interface ImgContent {
  title: string;
  img: Img[];
}

export interface VideoContent {
  title: string;
  src: string;
}

export interface BoxContent {
  title: string;
  boxes: Box[];
}
