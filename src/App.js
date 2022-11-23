import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Component4 from "./pages/Component4";
import Component from "./pages/Component";
import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";
import Component3 from "./pages/Component3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Component4 />} />

      <Route path="/4" element={<Component />} />

      <Route path="/3" element={<Component1 />} />

      <Route path="/2" element={<Component2 />} />

      <Route path="/5" element={<Component3 />} />
    </Routes>
  );
}
export default App;
