import Image from "next/image.js"
import { useState } from "react"
import enter from './../public/assets/icons/arrow_86002.svg'

export default function MyPage() {
  const [prompt, setPrompt] = useState("")
  const [answer, setAnswer] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const response = await fetch("/api/get-painting", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: prompt })
    })
    const data = await response.json()
    setAnswer(data.text)
    setIsLoading(false)
  }

  function handleChange(e) {
    setPrompt(e.target.value)
  }

  return (
    <div className="container">
      <h1>Dime que puedo dibujar para ti?</h1>
      <form className="our-form" onSubmit={handleSubmit}>
        <input className="prompt-field" type="text" onChange={handleChange} />
        <button className="prompt-button">
          <Image src={enter} width={20} height={20} alt="enter"/>
        </button>
      </form>

      {isLoading && <div className="loading-spinner"></div>}

      {answer ? <img src={answer} /> :
        null
      }
    </div>
  )
}
