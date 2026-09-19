import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [projects, setProjects] = useState([])
  const [currentpro, setCurrentpro] = useState(0)


  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects')
  
    .then(response => response.json()) 
    .then(data => setProjects(data))
  }, [])
   
  return (
    <>
      <header>
        <h1>Petar Lazarevic</h1>

        <nav>
          <a href="mailto:your-email@gmail.com">Gmail</a>
          <a href="https://github.com/lazarevicpetarpeco5-create">GitHub</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </nav>
          
      </header>

      <main>
        <section id="home">
          <h2>Full-Stack Developer</h2>
          <p>
           Sem Petar, študent z izkušnjami na področju GIS-a in omrežij. Računalnike sestavljam in preprodajam od 11. leta, 
           danes pa razvijam tudi lastne programske projekte. Uporabljam Python, 
           C in C++, trenutno pa se intenzivno učim JavaScripta in Reacta.
          </p>
          <p>
            C • C++ • Python • Js • FastAPI • React
          </p>
        </section>

      
        <section id="projects">
          <h2>Projects</h2>
          <button onClick={() =>{setCurrentpro(currentpro - 1) 
          if (currentpro == 0){
             setCurrentpro(2)
          }}}>←</button>
          {projects.slice(currentpro, currentpro + 1).map(madeproj => (
          <div key={madeproj.id}>
            <img className="project-icon" src={madeproj.icon} alt="" />
                {madeproj.name}
          </div>
           ))}

          <button onClick={() =>{setCurrentpro(currentpro + 1) 
          if (currentpro == 2){
            setCurrentpro(0)
          }}}>→</button>
        </section>

        <section id="about">
          <h2>About</h2>
          <p> 
           Rad ugotavljam, kako stvari delujejo, in se največ naučim tako, da se jih lotim sam.  
           Ob študiju in delu pa razvijam svoje projekte ter nadgrajujem znanje Pythona, 
           C-ja in C++. Zadnje čase veliko časa posvečam učenju JavaScripta, 
           ki ga sproti uporabljam pri izdelavi spletnih strani in aplikacij.
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <a href="mailto:your-email@gmail.com">Gmail</a>
          <a href="https://github.com/lazarevicpetarpeco5-create">GitHub</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </section>
      </main>
    </>
  )
}

export default App