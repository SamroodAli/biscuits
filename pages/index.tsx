export default function Home() {
  return (
    <>
      <header>
        <h1 className="text-4xl text-center pt-12 italic">
          Welcome to code and cookies
        </h1>
        <p className="text-center mt-3 text-lg">
          Where you can learn to code for free
        </p>
      </header>
      <section className="ml-4 border-2 border-red-300 mt-10 p-3">
        <h2>Table to contents</h2>
        <ul className="mt-2 border border-red-200 p-5 bg-red-300 text-lg text-slate-900">
          <li>Html</li>
          <li>Css</li>
          <li>Javascript</li>
        </ul>
      </section>
    </>
  );
}
