import { RecoilRoot } from "recoil";

// Components
import Router from "./pages/Router";

const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

export default App;
