import Navbar from "./components/Navbar";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div>
        <h1>Welcome to React Project</h1>
        <p>This is my React application.</p>

        <Form />
      </div>
    </>
  );
}

export default App;