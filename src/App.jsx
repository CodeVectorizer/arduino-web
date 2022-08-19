import { useEffect } from "react";
import { useState } from "react"
import {Card} from "./components/Card";
import { Preloader } from "./components/Preloader";
import { bgColor } from "./data/BgColor";



export default function App() {
  const API_ENDPOINT = "https://adminbempolije.com"
    // date now to localstring
  const [temp, setTemp] = useState(
    {
      temp: 0,
      humidity: 0
    }
  );  
  
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    document.title = 'Smart City Monitoring | POLIJE - KNU';
    getTemp();
  } , []);
  useEffect(() => {
    const interval = setInterval(getTemp, 10000);
    return () => clearInterval(interval)  ;
  } , [temp]);




  async function getTemp() {
    setIsLoading(true);
    setIsError(false);
    fetch(`${API_ENDPOINT}/api/temp` || "https://adminbempolije.com/api/temp")
      .then(res => res.json())
      .then(data => {
        setInterval(() => {
          setIsLoading(false);
        }, 5000);
        setTemp(temp => ({
          ...temp,
          temp: data.temp,
          humidity: data.humidity,
          total_car: data.total_car
        }));
        console.log(data);
      })
      .catch(() => {
        setIsError(true);
      });
  }

  return (    
    <>                   
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden dark:bg-gray-900 py-6 px-12 sm:py-12">
      <span className="absolute top-20 left-6 inline-block h-96 w-96 rounded-full bg-[#ff8e8e] mix-blend-multiply blur-2xl animate-blob2 animation-delay-2000"></span>
      <span className="absolute top-40 -left-10 inline-block h-80 w-80 rounded-full bg-[#86fff7] mix-blend-multiply blur-2xl animate-blob animation-delay-4000"></span>
      <span className="absolute top-20 right-6 inline-block h-96 w-96 rounded-full bg-[#edff75] mix-blend-multiply blur-2xl animate-blob animation-delay-3000"></span>
      <span className="absolute top-60 right-0 inline-block h-80 w-80 rounded-full bg-[#7d84ff] mix-blend-multiply blur-2xl animate-blob2 animation-delay-2000 "></span>
      {/* <div className="grid grid-cols-2 items-center justify-items-center"> */}
      <div className="flex items-center justify-center flex-wrap">
        <h1 className="w-full text-center text-6xl font-bold">Smart City Monitoring</h1>
        <h1 className="w-full text-center text-4xl font-medium mt-4 italic">POLIJE - KNU Collaboration</h1>
        <img src="/polije-logo.png" alt="POLIJE Logo" width={200} height={200} />
        <img src="/knu-logo.jpg" alt="KNU Logo" width={260} height={260} />
      </div>
      <div className="flex justify-between items-center flex-col md:flex-row gap-6">        
        <Card bgColor={bgColor.blue} title={"Humidity"} value={temp?.humidity} symbol={"%"}/>
        <Card bgColor={bgColor.yellow} title={"Temperature"} value={temp?.temp} symbol={"°C"}/>
        <Card bgColor={bgColor.red} title={"Total Car / Minute"}  value={temp?.total_car} symbol={"/ car"}/>
      </div>
    </div>          
    </>
  )
}