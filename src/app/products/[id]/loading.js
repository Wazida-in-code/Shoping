export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl animate-pulse rounded-2xl bg-white p-8 shadow-sm">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="h-72 rounded-xl bg-gray-100 md:h-96" />
          <div className="flex flex-col justify-center gap-4">
            <div className="h-6 w-24 rounded-full bg-gray-100" />
            <div className="h-9 w-3/4 rounded-lg bg-gray-100" />
            <div className="h-8 w-32 rounded-lg bg-gray-100" />
            <div className="h-20 w-full rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
