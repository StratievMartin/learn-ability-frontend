export default function LectureDetails({ lectures }) {
  const lect = lectures.map((l) => {
    return (
      <div key={l.id}>
        <p>{l.title}</p>
        <p>{l.description}</p>
        {/* <iframe width="420" height="345" src={l.video_url}></iframe> */}
        <a href={l.video_url}>link</a>
      </div>
    )
  })
  return (
    <div>
      <p style={{ color: 'red' }}>Lectures</p>
      {lect}
    </div>
  )
}
