import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Browse from "./components/Browse";
import Body from "./components/Body";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
