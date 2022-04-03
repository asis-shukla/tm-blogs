import axios from "axios";

export function fetchArticles(token: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return axios.post(
    `https://stage-services.truemeds.in/ArticleService/getArticleListing`,
    undefined,
    {
      headers,
    }
  );
}
