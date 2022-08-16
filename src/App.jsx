import { useEffect } from "react";
import { useState } from "react"


export default function App() {
  const API_ENDPOINT = "https://adminbempolije.com"
  const [temp, setTemp] = useState(
    {
      temp: 0,
      humidity: 0
    }
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getTemp();
  }, []);



  async function getTemp() {
    setIsLoading(true);
    setIsError(false);
    fetch(`${API_ENDPOINT}/api/temp` ||"https://adminbempolije.com/api/temp")
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        setTemp(temp => ({
          ...temp,
          temp: data.temp,
          humidity: data.humidity
        }));        
      })
      .catch(() => {
        setIsError(true);
      });
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden dark:bg-gray-900 py-6 px-12 sm:py-12">      
    <span className="absolute top-20 left-6 inline-block h-96 w-96 rounded-full bg-[#ff8e8e] mix-blend-multiply blur-2xl animate-blob2 animation-delay-2000"></span>
              <span className="absolute top-40 -left-10 inline-block h-80 w-80 rounded-full bg-[#86fff7] mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></span>
              <span className="absolute top-20 right-6 inline-block h-96 w-96 rounded-full bg-[#edff75] mix-blend-multiply blur-2xl animate-blob animation-delay-3000"></span>
              <span className="absolute top-60 right-0 inline-block h-80 w-80 rounded-full bg-[#7d84ff] mix-blend-multiply blur-2xl animate-blob2 animation-delay-2000 "></span>
      {/* <div className="grid grid-cols-2 items-center justify-items-center"> */}
      <div className="flex items-center justify-center flex-wrap">
        <h1 className="w-full text-center text-6xl font-bold">Smart City Monitoring</h1>        
        <h1 className="w-full text-center text-4xl font-medium mt-4 italic">POLIJE - KNU Collaboration</h1>
      <img src="/polije-logo.png" alt="POLIJE Logo" width={200} height={200}/>            
      <img src="/knu-logo.jpg" alt="KNU Logo" width={260} height={260}/>            
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row ">
        <div className="relative w-11/12 md:w-2/5 bg-gradient-to-t from-indigo-800 to-indigo-400 px-6 my-4 pt-10 pb-8 shadow-xl ring-1 ring-white/5 backdrop-blur-lg backdrop-filter sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">Temperature</h2>
            </div>
            <h1 className="mt-10 text-center text-7xl font-bold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">{temp.temp ? temp.temp : 0} °C</h1>
            {/* <h1 className="mt-4 text-center text-base font-semibold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">Normal Weather</h1> */}
            <div className="flex items-center justify-between ">
              <ul className="space-y-4 py-10">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-transparent stroke-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="ml-4">
                    <code className="text-sm text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">02/04/2022</code>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-transparent stroke-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="ml-4">
                    <code className="text-sm text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">02:08:00</code>
                  </p>
                </li>
              </ul>
              <div className="opacity-80">
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <path d="M96 0H0V96H96V0Z" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_3_39" transform="scale(0.0104167)" />
                    </pattern>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="divide-y divide-white/50"></div>
          </div>
        </div>
        <div className="relative w-11/12 md:w-2/5 bg-gradient-to-t from-amber-600 to-amber-300 bg-opacity-25 px-6 my-4 pt-10 pb-8 shadow-xl ring-1 ring-white/5 backdrop-blur-lg backdrop-filter sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">Humidity</h2>
            </div>
            <h1 className="mt-10 text-center text-7xl font-bold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">{temp.humidity ? temp.humidity : 0} %</h1>
            {/* <h1 className="mt-4 text-center text-base font-semibold text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">Normal Weather</h1> */}

            <div className="flex items-center justify-between">
              <ul className="space-y-4 py-10">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-transparent stroke-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="ml-4">
                    <code className="text-sm text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">02/04/2022</code>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-transparent stroke-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="ml-4">
                    <code className="text-sm text-white  after:h-full after:w-full after:block after:absolute after:inset-0 relative ">02:08:00</code>
                  </p>
                </li>
              </ul>
              <div className="opacity-80">
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                  <rect width="96" height="96" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_1_25" transform="scale(0.0104167)" />
                    </pattern>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}