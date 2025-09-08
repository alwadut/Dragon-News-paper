import React from "react";
import Header from "../compoments/Header";
import RightNav from "../compoments/Layout Component/RightNav";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news.details);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12">
        <section className="col-span-9 ">
          <h2>Dragon News</h2>
          <div className="card  shadow-sm">
            <figure className="px-10 pt-10 ">
              <img
              
                src={news?.image_url}
                alt="News"
                className="rounded-none w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>
                {news?.details}
              </p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back To the Catagory  </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3 ">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
