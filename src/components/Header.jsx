import React, { useState } from "react";

export default function Header() {
    const [messa, setMessa] = useState({});

    const peti = async () => {
        let message = await (await fetch(`http://localhost:5200/user`)).json();
        setMessa(message);
    }
    peti();
    const ver = ()=>{
        console.log(messa);

    }
    return (
        <div>

            <h1>Estoy header</h1>
            <button onClick={ver()}  >Hacer peticion</button>
        </div>
    )
}