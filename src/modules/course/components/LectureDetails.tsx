import { handleVideoUrl } from '../../../utils/utils';

const LectureDetails = ({ lecture }: any) => {
    return (
        <div>
            <p>{lecture.title}</p>

            <p>{lecture.description}</p>

            <p>{lecture.content}</p>

            <iframe
                width="420"
                height="345"
                src={handleVideoUrl(lecture.videoUrl)}
            ></iframe>
        </div>
    );
};
export default LectureDetails;
