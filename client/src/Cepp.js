import React from "react";

export function Cepp(props){
    const urlToFetch = `/${props.id}?_method=DELETE`;

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(urlToFetch, {
                method: 'DELETE',
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Usuń</button>
        </form>
    )
}