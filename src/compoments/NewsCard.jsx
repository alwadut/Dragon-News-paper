import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaRegEye, FaStar } from "react-icons/fa";

const NewsCard = (props ={}) => {
    const {news} = props || {}; // for validate news if any empty object find ,there is no error 
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src={news.author.img}
            alt="author"
          />
          <div>
            <h1 className="font-semibold text-gray-700 text-sm">{news.author.name}</h1>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-3 text-xl text-gray-600">
          <button>
            <CiBookmark />
          </button>
          <button>
            <CiShare2 />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="mb-4">
        <h2 className="font-bold text-gray-700 text-lg mb-3">{news.title}</h2>
        <img
          className="w-full h-60 object-cover rounded-md mb-3"
          src={news.thumbnail_url}
          alt="news thumbnail"
        />
        <p className="text-sm text-gray-700">
          {news.details.length > 250
            ? `${news.details.slice(0, 250)}...`
            : news.details}
          <span className="text-orange-500 font-medium cursor-pointer">
            {" "}
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-3 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(news.rating.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-600 ml-1">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye /> {news.total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
