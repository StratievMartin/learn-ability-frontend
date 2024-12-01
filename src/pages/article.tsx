import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle } from '../services/articlesServices';
import { Box, Flex } from '@mantine/core';
import { handleVideoUrl } from '../utils/utils';

const Article = () => {
    const [article, setArticle] = useState({
        title: '',
        description: '',
        content: '',
        price: '',
        lectures: [],
        keyword: '',
        videoUrl: '',
        imgUrl: '',
        // course:'',
        // author:'',
        // comments: ''
    });

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getArticle(params.id).then((res) => {
                setArticle(res.data);
            });
        }
    }, [params.id]);

    return (
        <div>
            <Flex justify={'space-between'}>
                <h2>{article.title}</h2>

                {/* <h2>{article.readTime}</h2> */}

                <h4>
                    <i>Read time</i>: 2m
                </h4>
            </Flex>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box w={'100%'}>
                    {article.keyword}
                    <img
                        src={article.imgUrl}
                        alt="img"
                        style={{
                            width: '100%',
                            height: '300px',
                            objectFit: 'cover',
                        }}
                    />

                    <Box>
                        <p>{article.description}</p>
                    </Box>

                    <iframe
                        width="100%"
                        height="760"
                        src={handleVideoUrl(article.videoUrl)}
                    ></iframe>

                    <div
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </Box>
            </div>
        </div>
    );
};
export default Article;
