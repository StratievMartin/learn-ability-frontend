import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseContentList from '../modules/course/CourseContentList';
// import LectureDetails from '../modules/course/components/LectureDetails'
import { getCourse } from '../services/courseService';

const Course = () => {
    const [course, setCourse] = useState({
        title: '',
        description: '',
        price: '',
        lectures: [],
        keyword: '',
        // author
        // students
        // comments
    });

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getCourse(params.id).then((res) => {
                console.log(res.data);

                setCourse(res.data);
            });
        }
    }, [params.id]);

    return (
        <div>
            <h2>{course.title}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    {course.keyword}
                    {course.price}
                    <div
                        dangerouslySetInnerHTML={{ __html: course.description }}
                    />

                    <div>
                        {/* {course?.lectures && <LectureDetails lectures={course?.lectures} />} */}
                    </div>
                </div>

                <CourseContentList />
            </div>
        </div>
    );
};
export default Course;
