import "./App.css";
import ClassComponent from "./components/classComponent";
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import PureComponent from './components/PureComponent'
import ParentComp from "./components/ParentComp";
import PostList from "./components/axios/PostList";
import PostForm from './components/axios/PostForm'

function App() {
  return (
    <div className="App">
      {/* <ClassComponent /> */}
      {/* <NameList/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <PureComponent/> */}
      {/* <ParentComp/> */}
      {/* <PostList/> */}
      <PostForm/>
    </div>
  );
}

export default App;
