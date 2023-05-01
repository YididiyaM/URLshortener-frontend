import PostForm from "./components/PostForm";
import ShortenedURL from "./components/ShortenedURL";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
        <ShortenedURL />
      </header>
    </div>
  );
}

export default App;
