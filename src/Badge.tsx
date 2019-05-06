import classNames from "classnames";
import React from "react";
import { BadgeProps } from "./interface";
import ScrollNumber from "./ScrollNumber";
import BadgeDot from "./BadgeDot";

export function Badge(props: BadgeProps) {
    const { prefixCls = "xy-badge", className, style, dot, positionStyle, offset, status, text, children, ...rest } = props;
    const showDot = !("count" in props);
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}-not-wrapper`]: !children,
        [`${prefixCls}-status`]: showDot
    });

    return (
        <span className={classString} style={style}>
            {children}
            <span className={`${prefixCls}-position`}>
                {showDot ? (
                    <BadgeDot className={classNames({ dot__hidden: !dot && !status })} style={positionStyle} status={status}>
                        {text}
                    </BadgeDot>
                ) : (
                    <ScrollNumber style={positionStyle} {...rest} />
                )}
            </span>
        </span>
    );
}

export default React.memo(Badge);
