import React, {useEffect, useState} from "react";

export function Bepp() {
    const urlBesidesProxy = '/list-of-users';
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
                    <p id={i}><strong>{user.name}</strong> dołączył <strong>{user.startTime}</strong> i ma id: <strong>{user.id}</strong> </p>
                ))
            )}
        </div>
    )
}