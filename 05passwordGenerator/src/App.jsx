import { useState, useCallback ,useEffect,useRef} from "react";
import "./App.css";

function App() {
  //  State hook that react will keep the record of all the states. ----------------------------------------------

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharaAllowed] = useState(false);
  const [password, SetPassword] = useState("");

  //use ref hook

  const passwordRef=useRef()

  // this is the creation  of a callback function using usecallback hook will generayes the password  if it's not already generated

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}[]";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    SetPassword(pass);
  }, [length, numberAllowed, charAllowed, SetPassword]);

  // this is callback function is used to create the function copy the password from the input field. 
  
const copypasswordtoclip=useCallback(()=>{
  passwordRef.current.select();    //-->this line states that  we are selecting all text in the input filed.
  window.navigator.clipboard.writeText(password)
},[password])

// this is the  use effect hook which will run after every render of the component.
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed])

  // this will return all the html  code which needs to be rendered on the browser.

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-20 my-20 text-orange-500 bg-gray-700 text-center ">
      <h1 className="text-2xl text-center text-white my-4">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 px-8 my-8">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="passsword"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copypasswordtoclip}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prevState) => !prevState);
              }}
            >
            </input>
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharaAllowed((prevState) => !prevState);
              }}
            >
            </input>
            <label htmlFor="charInput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
