import "./App.css";
import FetchApi from "./components/FetchApi";
import Text from "./components/Text";
import PreDictAgeApi from './components/PreDictAgeApi'

function App() {
  return (
    <div className="App">
      {/* <Text/> */}
      {/* <FetchApi/> */}
      <PreDictAgeApi />
    </div>
  );
}

export default App;
