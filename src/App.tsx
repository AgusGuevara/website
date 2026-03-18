import Panels from "./components/main/Panels";
import "@/styles/globals.css";

function App() {
  document.title = "Agus Website";

  return (
    <section className="flex flex-col items-center h-screen w-full py-8 px-6">
      <Panels />
    </section>
  );
}

export default App;
