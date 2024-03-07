import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div>
      <header className="shadow h-16 flex items-center">
        <div className="px-4">
          <h1 className="text-2xl">Bookmarks</h1>
        </div>
      </header>
      <main className="mt-4 max-w-5xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
