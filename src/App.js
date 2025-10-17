import Footer from "./Footer";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="text-center fw-bold mb-5">Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
