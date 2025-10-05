export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-2xl p-8 bg-white rounded-2xl shadow-lg text-center">
        <div className="text-6xl font-extrabold text-blue-600">404</div>
        <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
        <p className="mt-2 text-slate-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600"
          >
            Go home
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 text-slate-700 font-medium hover:bg-gray-200"
          >
            Contact us
          </a>
        </div>
        <div className="mt-6 text-sm text-slate-400">
          If you think this is an error, please reach out via the contact page.
        </div>
      </div>
    </div>
  );
}
