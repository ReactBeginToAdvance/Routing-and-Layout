import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About.page";
import Contact from "./pages/contact.us.page";
import Details from "./pages/details.page";
import Homepage from "./pages/home.page";
import Rootlayout from "./Layout/root-layout";  // Make sure this file exists
import Mainlayout from "./Layout/main.layout";  // Make sure this file exists

const App = () => {
  return (
      <Routes>
        <Route element={<Rootlayout />}>
          <Route element={<Mainlayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/details" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
          </Route>
        </Route>
      </Routes>
  );
};

export default App;
