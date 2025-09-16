import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const LatestNews = () => {
  const data = useLoaderData([]);
  console.log(data);
  
  return (
    <div className="flex gap-2 bg-base-200 p-2">
      <p className="bg-[#d72050] px-3 py-1">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        {/* {newsList.map((news) => (
          <Link key={news._id} to={`/news/${news._id}`} className="mr-10">
            {news.title}
          </Link>
        ))} */}
      </Marquee>
    </div>
  );
};

export default LatestNews;
