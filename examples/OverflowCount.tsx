import React from "react";
import { Badge } from "../src";
import "./index.scss";

export default function() {
    return (
        <div className="badge-demo">
            <Badge count={99} overflowCount={99}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={100} overflowCount={99}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={99} overflowCount={10}>
                <a href="#" className="head-example" />
            </Badge>
            <Badge count={1000} overflowCount={999}>
                <a href="#" className="head-example" />
            </Badge>
        </div>
    );
}
