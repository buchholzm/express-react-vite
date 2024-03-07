import { json, useLoaderData } from 'react-router-dom';

export async function loader() {
  const response = await fetch('/api/topics');
  const topics = await response.json();

  return json({ topics });
}

export default function HomeRoute() {
  const { topics } = useLoaderData();

  return (
    <div>
      <h2 className="text-xl my-4">Liste der Themen</h2>
      <ul>
        {topics.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}
