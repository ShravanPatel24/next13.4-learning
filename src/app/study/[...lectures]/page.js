"use client";

export default function Lecture({ params }) {
  return (
    <div>
      <h3>Day: {params.lectures[0]}</h3>
      <h3>Lecture: {params.lectures[1]}</h3>
    </div>
  );
}
