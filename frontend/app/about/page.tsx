import Sidebar from "@/components/Sidebar";

export default function About() {
  return (
    <div className="min-h-[60vh] p-6 flex bg-slate-50">
      <Sidebar
        onQuickAdd={() => {
          const el = document.querySelector(
            "input#title"
          ) as HTMLInputElement | null;
          if (el) {
            el.focus();
            el.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }
        }}
      />
      <main className="max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-extrabold">
          About Personal Finance Tracker
        </h1>
        <p className="mt-4 text-slate-600">
          Personal Finance Tracker is a lightweight app to help you track
          income, expenses, budgets, and investments. It focuses on giving
          clear, actionable insights so you can make better financial decisions.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Key features</h2>
        <ul className="list-disc ml-6 mt-2 text-slate-700">
          <li>Real-time balance and transaction history</li>
          <li>Easy add/edit transactions with categories</li>
          <li>Budget planning and comparison against actuals</li>
          <li>Simple investment tracking</li>
        </ul>

        <h2 className="mt-6 text-2xl font-semibold">Our goal</h2>
        <p className="mt-2 text-slate-600">
          We want to empower individuals to take control of their finances with
          a simple, privacy-first tool. No unnecessary bloat — just clear data
          and helpful visualizations.
        </p>

        <h2 className="mt-6 text-2xl font-semibold">Get involved</h2>
        <p className="mt-2 text-slate-600">
          Found a bug or have a suggestion? Check the repository on GitHub or
          reach out via the contact page. Contributions and feedback are
          welcome.
        </p>
      </main>
    </div>
  );
}
