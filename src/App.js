import './App.css';
import Header from "./components/Header" ; 
import { Provider } from 'react-redux';
import store from "./Utils/store" ; 
import { Outlet } from 'react-router-dom';


// provide my store to app 

function App() {
  return (
    
    <Provider store={store}>
     <Header />
     <Outlet/>
     </Provider>
    
  );
}



export default App;
