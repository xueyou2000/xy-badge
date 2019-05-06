import React, { useState } from "react";
import { Badge } from "../src";
import "./index.scss";

export default function() {
    const [count, setCount] = useState(33);

    return (
        <div className="badge-demo">
            <Badge status="success" />
            <Badge status="error" />
            <Badge status="default" />
            <Badge status="processing" />
            <Badge status="warning" />
            <br />
            <Badge status="success" text="Success" />
            <br />
            <Badge status="error" text="Error" />
            <br />
            <Badge status="default" text="Default" />
            <br />
            <Badge status="processing" text="Processing" />
            <br />
            <Badge status="warning" text="Warning" />
        </div>
    );
}
