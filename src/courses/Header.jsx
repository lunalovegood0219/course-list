export default function Header() {
  const statuses = ["All", "Active", "Compeleted", "Upcoming"];

  return (
    <div>
      <h1>My courses</h1>
      <div className="course-status">
        {statuses.map((s) => (
          <div key={s} className="active">
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
