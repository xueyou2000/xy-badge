import React, { useState } from "react";
import Switch from "xy-switch";
import "xy-switch/assets/index.css";
import { Badge } from "../src";
import "./index.scss";

export default function() {
    const [count, setCount] = useState(5);
    const [dot, setDot] = useState(true);

    return (
        <div className="badge-demo">
            <div style={{ marginBottom: "20px" }}>
                <Badge count={count} />
                <button onClick={() => setCount((prev) => prev - 1)}>-</button>
                <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            </div>

            <div>
                <Badge dot={dot} style={{ marginRight: "15px" }}>
                    <a href="#" className="head-example" />
                </Badge>

                <Switch checked={dot} onChange={setDot} />
            </div>
        </div>
    );
}
