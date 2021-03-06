import React from "react";
import { Badge } from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="badge-demo">
            <Badge count={5}>
                <a href="#" className="head-example" />
            </Badge>

            <Badge count={0} showZero={true}>
                <a href="#" className="head-example" />
            </Badge>
        </div>
    );
}
