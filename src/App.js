import PostForm from "./components/PostForm";
import ShortenedURL from "./components/ShortenedURL";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PostForm />
          <ShortenedURL />
        </header>
      </div>
    </Router>
  );
}

export default App;
