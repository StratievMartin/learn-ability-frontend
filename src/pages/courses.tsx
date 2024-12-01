import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCoursesByKeyword } from '../services/courseService';
import CourseCard from '../modules/course/components/CourseCard';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [keyword, setKeyword] = useState('');
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getCoursesByKeyword(params.id).then((res) => {
                setCourses(res.data.courses);
                setKeyword(res.data.keyword);
            });
        }
    }, [params.id]);

    return (
        <div>
            <h2>{keyword}</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {courses.map((course) => {
                    return (
                        <CourseCard
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            description={course.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Courses;
