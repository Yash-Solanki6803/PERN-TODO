import InputTodo from "./components/InputTodo";
import DisplayTodo from "./components/DisplayTodo";

function App() {
  return (
    <main className="border border-black max-h-screen h-screen px-10 py-14 lg:px-48 lg:py-16 flex flex-col  text-sm lg:text-base ">
      <section className="px-4 py-6 text-center rounded-t-2xl bg-slate-50 shadow-lg shadow-slate-400 ">
        <h1 className="tex-3xl md:text-4xl font-semibold text-emerald-500">
          Todo - PERN Stack
        </h1>
      </section>
      <section className="px-4 border-t border-slate-300  py-6 text-center  bg-slate-50 shadow-lg shadow-slate-400">
        <InputTodo />
      </section>
      <section className="p-4  border-t border-slate-300 h-full text-center rounded-b-2xl bg-slate-50 shadow-lg shadow-slate-400 overflow-y-auto flex">
        <DisplayTodo />
      </section>
    </main>
  );
}

export default App;
