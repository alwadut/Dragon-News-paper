import { useLoaderData } from "react-router-dom";
import NewsCard from "../compoments/NewsCard";


const CategoryNews = () => {
    const {data: news} = useLoaderData()
    console.log(news);
    return (
        <div className="p-4">
            <h2 className="font-semibold ">Dragon News Home </h2>
            <h2 className="text-gray-400 text-sm">{news.length} News are shown in Category </h2>
            <div>
                {
                    news.map((singleNews) =>(
                        <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;