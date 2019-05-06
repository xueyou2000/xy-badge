import React from "react";
import { Badge } from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="badge-demo">
            <Badge dot={true}>
                <a href="#" className="head-example" />
            </Badge>
            <br />
            <Badge dot={true}>
                <a href="#">Link something</a>
            </Badge>
        </div>
    );
}
