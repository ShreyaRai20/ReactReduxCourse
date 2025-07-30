import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import DisplayComponent from './components/DisplayCounter'
import Header from './components/Header'
import Controls from './components/Controls';
import { useSelector } from 'react-redux';
import DisplayMsg from './components/DisplayMsg';

function App() {
  const privacy = useSelector(store => store.privacy)

  return (
    <>
    <div className="px-4 py-5 my-5 text-center"> 
      <Header/>
      <div className="col-lg-6 mx-auto"> 
        {privacy ? <DisplayMsg/> : <DisplayComponent/>}
        {/* <DisplayComponent/> */}
        <Controls/>
      </div> 
    </div>
    </>
  )
}

export default App
