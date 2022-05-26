import axios from 'axios';
export {};

let url:string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123'

interface Article {
  id: number;
  title: number;
  description: string;
}

axios.get<Article[]>(url).then(function(res) {
  interface MyArticle {
    id: number;
    title: number;
    description: string;
  }
  let data: MyArticle[];
  data = res.data
  console.log(data)
});
