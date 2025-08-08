import "bootstrap/dist/css/bootstrap.min.css";
import ClockHeading from "./components/ClockHeading.jsx";
import ClockSlogan from "./components/ClockSlogan.jsx";
import ClockTime from "./components/ClockTime.jsx";

function App() {
  return (
    <div>
      <ClockHeading/>
      <ClockSlogan/>
      <ClockTime/>
    </div>
  )
}

export default App
