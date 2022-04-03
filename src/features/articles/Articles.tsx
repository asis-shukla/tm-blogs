import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectedArticles } from "./articlesSlice";

function Articles() {
  const articles = useAppSelector(selectedArticles);

  const renderArticles = articles.map((item:any) => {
    return <p> {item}</p>;
  });
  
  return (
    <div>
      <p>Articles</p>
      {renderArticles}
    </div>
  );
}

export default Articles;
