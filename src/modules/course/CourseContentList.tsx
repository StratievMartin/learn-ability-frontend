import LecturerCard from './components/LecturerCard'

const CourseContentList = () => {
  const lecturerData = {
    name: 'Lora',
    email: 'lora@gmail.com',
    job: 'Lecturer',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  }
  return (
    <div>
      <LecturerCard lecturerData={lecturerData} />
    </div>
  )
}
export default CourseContentList
