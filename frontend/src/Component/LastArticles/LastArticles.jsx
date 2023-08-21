import React from "react";
import SectionHeader from '../SectionHeader/SectionHeader'
import "./LastArticles.css";
import ArticleBox from "../ArticleBox/ArticleBox";

export default function LastArticles() {
  return (
    <section className="articles">
      <div className="container">

        <SectionHeader
          title="جدیدترین مقاله ها"
          desc="پیش به سوی ارتقای دانش"
          btnTitle="تمامی مقاله ها"
        />
        <div className="articles__content">
          <div className="row">
            <ArticleBox title='متن 1' cover='images/blog/1.jpg' desc='توضیح 1' />
            <ArticleBox title='متن 2' cover='images/blog/2.jpg' desc='توضیح 2' />
            <ArticleBox title='متن 3' cover='images/blog/3.jpg' desc='توضیح 3' />
          </div>
        </div>
      </div>
    </section>
  );
}
