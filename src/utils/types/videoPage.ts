export interface videoCardProps {
  title: string;
  imgSrc: string;
  views: number;
}

export interface videoPageSliderBase {
  id: number;
  title: string;
  videoCover: string;
  views: number;
  video: string;
}

export interface VideoPageSliderProps {
  videos: videoPageSliderBase[];
  setActive: Function;
}
