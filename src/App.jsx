import { GlobalStyle } from "./styles/GlobalStyle";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Main from "./pages/Main";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Main />
    </>
  );
};

export default App;
