"use client";

export default function Student({params}) {
  console.log(params);
  return (
    <div>
      Student Details
      <h1>Name: {params.student}</h1>
    </div>
  );
}
