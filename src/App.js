import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navi from "./components/Navi"
import Error from "./pages/Error";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
const App = () => {
  return (
    <Router>
    <Navi/>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/secondcontent" element={<SecondPage/>}/>
        <Route path="/thirdcontent" element={<ThirdPage/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </Router>
  );
};

export default App;
