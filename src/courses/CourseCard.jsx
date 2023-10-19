import React from "react";

export default function CourseCard({ course }) {
  return (
    <div>
      <div className="course-item">
        <div className="course-item__img">
          <img src={course.imageUrl} alt="iamg-card" />
        </div>
        <div className="course-item__detail">
          <CourseCardBody
            title={course.title}
            description={course.description}
            rate={course.rate}
          />
          <CourseCardFooter course={course} />
        </div>
      </div>
    </div>
  );
}

function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{title}</p>
        <p className="desc">{description}</p>
      </div>
      <span className="rate">{rate}</span>
    </div>
  );
}
function CourseCardFooter({ course }) {
  const createDate = new Date(course.start).toLocaleDateString("en-UK", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((t) => (
          <span className="badge badge--secondary" key={t}>
            React.js
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">{createDate}</div>
        <span
          className={`badge ${
            course.status === "Active"
              ? "badge--primary"
              : course.status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          } `}
        >
          {course.status}
        </span>
      </div>
    </div>
  );
}
