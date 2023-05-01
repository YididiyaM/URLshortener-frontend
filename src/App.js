import PostForm from "./components/PostForm";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PostForm />
        </header>
      </div>
    </Router>
  );
}

export default App;
