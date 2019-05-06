import classNames from "classnames";
import React from "react";
import { ScrollNumberProps } from "./interface";
import ScrollNumberItem from "./ScrollNumberItem";

export function ScrollNumber(props: ScrollNumberProps) {
    const { prefixCls = "xy-scroll-number", className, style, count, overflowCount, showZero } = props;
    const _count = overflowCount ? Math.min(count, overflowCount) : count;
    const countStr = _count.toString();
    const classString = classNames(prefixCls, className, {
        [`${prefixCls}__hidden`]: count === undefined || count === null || showZero ? count < 0 : count <= 0
    });

    return (
        <sup className={classString} style={style}>
            {countStr.split("").map((v, i) => (
                <ScrollNumberItem key={i} count={_count} digits={countStr.length - 1 - i} />
            ))}
            {overflowCount && count > overflowCount && <span className={`${prefixCls}__text`}>+</span>}
        </sup>
    );
}

export default React.memo(ScrollNumber);
