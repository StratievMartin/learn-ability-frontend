import CourseProgressTracker from '../modules/course/components/ProgressTrackers/CourseProgressTracker';
import MonthlyProgressTracker from '../modules/course/components/ProgressTrackers/MonthlyProgressTracker';

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>

            <MonthlyProgressTracker />

            <CourseProgressTracker />
        </div>
    );
};
export default Profile;
