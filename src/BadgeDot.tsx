import classNames from "classnames";
import React from "react";
import { BadgeDotProps } from "./interface";

export function Badge(props: BadgeDotProps) {
    const { prefixCls = "xy-badge-dot", className, style, status, children } = props;
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}__status_${status}`]: !!status
    });

    return (
        <span className={classString} style={style}>
            <span className={`${prefixCls}-status`} />
            {children && <span className={`${prefixCls}-text`}>{children}</span>}
        </span>
    );
}

export default React.memo(Badge);
