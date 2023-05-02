import PostForm from "./components/PostForm";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="title">
            <h2>Y A . L S</h2>
            <p> Yet Another Link Shortener</p>
          </div>
          <PostForm />
        </header>
      </div>
    </Router>
  );
}

export default App;
