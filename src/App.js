
import Head from './components/Head'
import './App.css';
import MainContainer from "./components/MainContainer"
import { Provider } from 'react-redux';
import store from './utils/store';
import Body from './components/Body';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/>
      <Body/>   
       </div>
      </Provider>
  );
}

export default App;
