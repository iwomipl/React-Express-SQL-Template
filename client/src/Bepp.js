import React, {useEffect, useState} from "react";
import {Cepp} from "./Cepp";

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
    })
    return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Applied at</th>
                    <th>Id</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
            {(typeof backendData.results === 'undefined') ? (
                <tr>
                    <td>Loading...</td>
                </tr>
            ) : (
                backendData.results.map((user, i) => {
                    return (
                        <tr key={i}>
                            <td>{user.name}</td>
                            <td>{user.startTime}</td>
                            <td>{user.id}</td>
                            <td>
                                <Cepp id={user.id}/>
                            </td>
                        </tr>
                    )
                })
            )}
                </tbody>
            </table>
    )
}