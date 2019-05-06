import React from "react";
import { Badge } from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="badge-demo">
            <Badge count={99} overflowCount={99} />
            <Badge count={4} positionStyle={{ backgroundColor: "#fff", color: "#999", boxShadow: "0 0 0 1px #d9d9d9 inset" }} />
            <Badge count={109} positionStyle={{ backgroundColor: "#52c41a" }} />
        </div>
    );
}
