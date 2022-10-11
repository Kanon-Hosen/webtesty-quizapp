import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Navbar from "./components/Navbar/Navbar";
import QuizPage from "./pages/QuizPage";
import Topics from "./pages/Topics";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/statistics" element={<Statistics></Statistics>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/quiz/:id" element={<QuizPage></QuizPage>}></Route>
        <Route path="/topics" element={<Topics></Topics>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
