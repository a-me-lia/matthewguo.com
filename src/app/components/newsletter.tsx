'use client';

import axios from 'axios';
import { useState } from 'react';

const APIRequest = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      const response = await axios.post('/api/email', { email });
      setState('SUCCESS');
    } catch (e: any) {
      setErrorMessage(e.response.data.error);
      setState('ERROR');
    }
  };

  return (
    <div className="flex flex-col justify-between ">
      {/* <a className="absolute bottom-5 left-10 mt-[0.2rem] text-white/[0.5] z-50 hover:hidden">IMmari@nerv.company</a> */}

      <div className="mt-2 flex flex-row border-2 border-white  bg-transparent  lg:w-80">
        <label className="absolute z-50 mt-[0.2rem]  text-black/[0.5] hover:hidden"></label>

        <input
          className="w-full bg-transparent pl-2 text-white"
          type="email"
          placeholder="MarinKitagawa@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={` bg-darkAccent px-5 py-1 text-white hover:bg-slate-500 ${
            state === 'LOADING' ? 'button-gradient-loading' : ''
          }`}
          type="button"
          disabled={state === 'LOADING'}
          onClick={subscribe}
        >
          submit
        </button>
      </div>

      {state === 'ERROR' && (
        <p className="relative mt-2 w-full text-red-600">{errorMessage}</p>
      )}
      {state === 'SUCCESS' && (
        <p className="relative mt-2 w-full text-green-600">Success!</p>
      )}
    </div>
  );
};

export default APIRequest;
