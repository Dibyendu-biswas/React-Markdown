
import { useState } from 'react'
import './App.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
function App() {
  const [value, setvalue] = useState()

  return (
    <section style={{
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      margin: "2rem",
      padding: "3rem",
      gap: "2rem",
    }}>

      <div>
        <h1> Markdown Type</h1>
        <textarea value={value} style={{ outline: "none", }} onChange={(e)=>setvalue(e.target.value)} name="" id="" cols="60" rows="40"></textarea>
      </div>
      <div>
        <h1>Markdown Preview</h1>
        <article style={{
          width: "60%",
          height: "90vh"
        }}>
          <ReactMarkdown>{value}</ReactMarkdown>
        </article>
      </div>

    </section>
  )
}

export default App
