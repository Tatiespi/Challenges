import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import Son from "./son";

export function Father() {
    const list = [1, 2, 3, 4, 5];
    const [valor, setValor] = useState(0);

    const incrementCb = useCallback(
        (num) => setValor(v => v + num), []
    );

    return (
        <div>
            <h1>Father</h1>
            <p>Total:{valor}</p>
            <hr />

            {
                list.map( (n, idx) => {
                    return (
                        <Son
                            key={idx}
                            number={n}
                            increment={incrementCb}
                        />
                    )
                })
            }
        </div>
    )
}