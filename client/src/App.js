import React, { useEffect, useState } from 'react'

function App() {
  const urlBesidesProxy = '/adder';
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {

    fetch(urlBesidesProxy).then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    ).catch(
      { "results": ["error"] }
    );
  }, [])

  return (
    <div>
      {(typeof backendData.results === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.results.map((user, i) => (
          <p id={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App