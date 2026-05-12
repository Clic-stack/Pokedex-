import { useEffect, useRef, useState } from "react"
import { useName } from "../context/nameContext"
import { useNavigate } from "react-router"
import '../styles/Home.css'

function Home() {
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const {name, getName} = useName()

  useEffect(() => {
    if (name) {
      navigate('/pokedex')
    }
  }, [name, navigate])

  const handleSetName = () => {
    const value = inputRef.current?.value.trim()
    setError(null)
    
    if (!value) {
      setError('Please enter a name')
      return
    }
    
    if (!/[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]/.test(value)) {
      setError('Please include at least one letter in your name')
      return
    }

    if (/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s'-]/.test(value)) {
      setError('Only letters, numbers, spaces, and common writing symbols are allowed')
      return
    }
  
    if (value.length < 2) {
      setError('Please enter a full name')
      return
    }
  
    if (value.length > 25) {
      setError('Sorry, the input exceeded the allowed number of characters. Try again, maybe with a short name')
      return
    }
  
    getName(inputRef.current?.value as string)
    inputRef.current!.value = ''
  
    navigate('/pokedex')
  }

  return (
    <div className="home">
      {!name && (<>
        <h1 className="title">POKÉDEX</h1>
        <h2 className="welcome">¡Hi, Trainer!</h2>
        <p className="instruction">Please enter your name for begin</p>

        <div className="box">
          <input 
            className="input"
            type="text" 
            ref={inputRef} 
            placeholder="Enter your name"
            onKeyDown={(e) => e.key === "Enter" && handleSetName()}
            onChange={() => error && setError(null)}
          />
          <button className="btn" onClick={handleSetName}>
              Start
          </button>

          {error && <p className="btn__error">{error}</p>}

        </div>
      </>)}
    </div>
  )
}

export default Home