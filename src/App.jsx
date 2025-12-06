import { useState, useRef, useEffect } from "react"

function App() {
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/")
  //     if (!response.ok) {
  //       throw new Error("failed to fetch data")
  //     }
  //     const data = response.json()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <div className="">
      <iframe
        className="h-screen w-screen"
        src="http://localhost:3000/etios-car-rent-ulsoor"
      ></iframe>
    </div>
  )
}

export default App
