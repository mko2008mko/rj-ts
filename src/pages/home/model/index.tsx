 export interface Topic {
    id: number;
    title: string;
    imgUrl: string;
  }
  
  export interface Article {
    id: number;
    title: string;
    desc: string;
    imgUrl: string;
  }
  
  export interface Recommend {
    id: number;
    imgUrl: string;
  }
  
  export interface RecommendWriter {
    id: number;
    name: string;
    desc: string;
    imgUrl: string;
  }
  
  export interface HomeState {
    topicList: Array<Topic>;
    articleList: Array<Article>;
    recommendList: Array<Recommend>;
    recommendWriter: Array<RecommendWriter>;
    page: number;
    isShow: boolean;
    rwPage: number;
    rwTotalPage: number;
  }
  