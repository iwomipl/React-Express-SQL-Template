import React, { useState } from 'react'
import {Bepp} from "./Bepp";

export function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const urlToFetch = `/adder/${username}`;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(urlToFetch, {
            method: "POST",
          });

      const {startTime, name, id} = await (await res.json()).results[0];

      if (res.status === 200) {
        setUsername("");
        setMessage(<p>At <strong>{startTime}</strong> You have successfully created a user called <strong>{name}</strong> with id: <strong>{id}</strong></p>);
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <div className="App">
<Bepp/>
          <hr/>
        <form onSubmit={handleSubmit}>
            <label>Add user:<br/>
              <input
                  type="text"
                  value={username}
                  placeholder="Name"
                  onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          <button type="submit">Create</button>

          <div className="message">{message ? <span>{message}</span> : null}</div>
        </form>


      </div>
  );
}