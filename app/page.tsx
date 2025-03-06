'use client'
import { useState } from "react";
const Home = () => {
  const [cilckCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount((prev) => (prev >= 4 ? 0 : prev + 1));
  }

  return (
    <main className={`h-screen flex justify-center items-center gap-2 ${cilckCount === 3 ? 'bg-yellow-400' : 'bg-white'}`} onClick={handleClick}>
      {cilckCount === 1 || cilckCount === 2 || cilckCount === 3 ? (
        <div className="h-52 w-52 rounded-full border-2 border-blue-400"></div>
      ) : null}
      {cilckCount === 2 || cilckCount === 3 ? (
        <div className="h-10 w-10 rounded-full border-2 border-red-500"></div>
      ) : null}
    </main>
  )
}

export default Home