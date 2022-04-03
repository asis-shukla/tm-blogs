import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchArticlesAsync, selectedArticles } from "./articlesSlice";

const ShowTimer = (props: any) => {
  return (
    <div className="timer-wrapper">
      <p> {props.minute}</p>
      <p> {props.second}</p>
    </div>
  );
};

function Articles() {
  const articles = useAppSelector(selectedArticles);
  const dispatch = useAppDispatch();
  const [time, setTime] = useState({
    minute: 0,
    second: 60,
  });

  const renderArticles = articles.map((item: any) => {
    return <p> {item}</p>;
  });

  setInterval(() => {
    setTime({
      ...time,
      second: time.second - 1,
    });
    if (time.minute === 0 && time.second === 0) {
      dispatch(fetchArticlesAsync());
    }
  }, 1000);

  return (
    <div>
      <p>Articles</p>
      <ShowTimer minute={time.minute} second={time.second} />
      {renderArticles}
    </div>
  );
}

export default Articles;
