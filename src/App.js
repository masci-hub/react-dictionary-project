import Search from "./Search";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="text-center fw-bold mb-5">Dictionary</h1>
        </header>
        <main>
          <Search />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
