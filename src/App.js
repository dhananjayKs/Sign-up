import './App.css';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import logo from './logo.png';
import Page1 from './Pages/Page1';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page2 from './Pages/Page2';
import { reducer } from './reducer';
import { useReducer } from 'react';

function App() {
  let initialState = {
    fullName: '',
    displayName: '',
    workspaceName: '',
    workspaceUrl: '',
    subscriptionType: 'self',
    currentPage: 1,
  };
  let [state, dispatch] = useReducer(reducer, initialState);

  let content = <Page1></Page1>;

  switch (state.currentPage) {
    case 1:
      content = <Page1 state={state} dispatch={dispatch}></Page1>;
      break;
    case 2:
      content = <Page2 state={state} dispatch={dispatch}></Page2>;
      break;
    case 3:
      content = <Page3 state={state} dispatch={dispatch}></Page3>;
      break;
    case 4:
      content = <Page4 state={state} dispatch={dispatch}></Page4>;
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <div className="main-heading">
        <img src={logo} alt="logo" className="main-logo"></img>
        <h1 className="main-heading">Eden</h1>
      </div>
      <ProgressBar currentState={state.currentPage} steps={4}></ProgressBar>
      <div className="main-page">{content}</div>
    </div>
  );
}

export default App;
