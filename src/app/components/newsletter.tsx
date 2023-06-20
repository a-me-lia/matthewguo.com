"use client"; 
import { useState } from "react";
import axios from "axios";


var APIRequest = () => {

  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/email", { email });
      setState("SUCCESS");
    } catch (e: any) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (

    <div className="flex flex-col justify-between ">

      {/*<a className="absolute bottom-5 left-10 mt-[0.2rem] text-white/[0.5] z-50 hover:hidden">IMmari@nerv.company</a>*/}

      
        <div className="flex flex-row lg:w-80 bg-transparent border-white  border-2  mt-2">
          <label className="absolute mt-[0.2rem] text-black/[0.5]  z-50 hover:hidden"></label>

          <input
          className="text-white pl-2 bg-transparent w-full"
          type="email"
          placeholder="MarinKitagawa@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />


          <button
          className={` bg-darkAccent px-5 py-1 hover:bg-slate-500 ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
          >
          submit
          </button>
        </div>

        {state === "ERROR" && (
        <p className="relative w-full mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="relative w-full mt-2 text-green-600">Success!</p>
      )}

    </div>


    
  );
};

export default APIRequest;