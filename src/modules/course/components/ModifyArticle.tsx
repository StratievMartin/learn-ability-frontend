import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    getArticle,
    deleteArticle,
    addArticle,
    updateArticle,
} from '../../../services/articlesServices';
import { Button, Flex, Select, TextInput, Textarea } from '@mantine/core';
import { getAllKeywords } from '../../../services/keywordsService';
import TextEditor from '../../common/components/TextEditor';

const ModifyArticle = () => {
    const [article, setArticle] = useState({
        id: 1,
        title: '',
        description: '',
        keyword: '',
        content: '',
        videoUrl: '',
        imgUrl: '',
    });
    const [keywords, setKeywords] = useState([]);
    const params = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        getAllKeywords().then((res) => {
            const mapped = res.data.map((kwd: any) => ({
                value: kwd.id,
                label: kwd.title,
            }));
            setKeywords(mapped);
        });
        if (params.id) {
            getArticle(params.id).then((res) => {
                setArticle((prevArticle) => ({
                    ...prevArticle,
                    ...res.data,
                }));
            });
        }
    }, [params.id]);

    const deleteArticleHandler = async (id: any) => {
        await deleteArticle(id).then((res) => {
            console.log(res);
        });
    };

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (params.id) {
            updateArticleHandler(params.id);
        } else {
            addArticleHandler();
        }
    };

    const onInputChange = (e: any) => {
        const { name, value } = e.target;
        setArticle((prev) => ({ ...prev, [name]: value }));
        setError(false);
    };

    const handleSelect = (e: any) => {
        setArticle((prev) => ({
            ...prev,
            keyword: e,
        }));
    };

    const addArticleHandler = async () => {
        try {
            await addArticle(article);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const updateArticleHandler = async (id: any) => {
        try {
            await updateArticle(id, article);
        } catch (err: any) {
            setError(err.message);
        }
    };

    const handleContentChange = (value: any) => {
        setArticle((prevArticle) => ({
            ...prevArticle,
            content: value,
        }));
    };

    return (
        <div>
            <Flex align="baseline" gap={20}>
                <h2>{article.title}</h2>

                <div>
                    <p
                        onClick={() => deleteArticleHandler(article.id)}
                        style={{ color: 'red', cursor: 'pointer' }}
                    >
                        X
                    </p>
                </div>
            </Flex>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <form onSubmit={onFormSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>

                        <TextInput
                            onChange={onInputChange}
                            value={article.title}
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="imgUrl">Image url</label>

                        <TextInput
                            onChange={onInputChange}
                            value={article.imgUrl}
                            type="text"
                            name="imgUrl"
                            id="imgUrl"
                            placeholder="Image url..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="videoUrl">Video url</label>

                        <TextInput
                            onChange={onInputChange}
                            value={article.videoUrl}
                            type="text"
                            name="videoUrl"
                            id="videoUrl"
                            placeholder="Video url..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>

                        <Textarea
                            onChange={onInputChange}
                            value={article.description}
                            name="description"
                            id="description"
                            placeholder="Description..."
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="keyword">Keyword</label>

                        <Select
                            placeholder="Pick one"
                            name="keyword"
                            onChange={handleSelect}
                            data={keywords}
                        />
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>

                        <TextEditor
                            value={article.content}
                            onChange={handleContentChange}
                        />
                    </div>

                    {error ? <span style={{ color: 'red' }}>{error}</span> : ''}

                    <div>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
                {/* <ArticleContentList /> */}
            </div>
        </div>
    );
};

export default ModifyArticle;
