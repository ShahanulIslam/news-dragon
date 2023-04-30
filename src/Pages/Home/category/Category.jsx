import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const catagoriesNews= useLoaderData()
    return (
        <div>
            {id && <h2>This is category :{catagoriesNews.length}</h2>}
            {
                catagoriesNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;