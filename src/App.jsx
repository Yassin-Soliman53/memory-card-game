import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home-page";
import GamePage from "./components/GamePage";
import Feed_back from "./components/feed-back";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GamePage" element={<GamePage />} />
        <Route path="/Feed_back" element={<Feed_back />}/>
      </Routes>
    </>
  );
}

export default App;
