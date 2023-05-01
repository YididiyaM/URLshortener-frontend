import PostForm from "./components/PostForm";
import OptionalValidity from "./components/OptionalValidity";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <PostForm />
          <OptionalValidity />
        </header>
      </div>
    </Router>
  );
}

export default App;
