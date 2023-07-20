import Link from "next/link";

export default function StudentList() {
  const names = ["Ganesh", "Kailash", "Shravan", "Pradeep"];

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {names.map((name) => (
          <li key={name.id}>
            <Link href={`/studentlist/${encodeURIComponent(name)}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
