import Button from "./Button";

function Buttons({onButtonClick}) {
    const buttonValues = ["C", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", "+", "-", "/","="];


  return (
    <div id="button-container">
        {buttonValues.map((val,id)=>(<Button onButtonClick={onButtonClick} key={id} val = {val}/>))}
      </div>
  )
}

export default Buttons
