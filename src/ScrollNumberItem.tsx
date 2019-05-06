import classNames from "classnames";
import React, { useRef } from "react";
import { useUpdateEffect } from "utils-hooks";
import { ScrollNumberItemProps } from "./interface";

function getNumberBit(num: number, digits: number) {
    const bits = num
        .toString()
        .split("")
        .reverse();
    if (digits <= bits.length - 1) {
        return parseInt(bits[digits]);
    } else {
        return undefined;
    }
}

function useScrollNumber(count: number, digits: number) {
    const lastCountRef = useRef(count);
    const currentBit = getNumberBit(count, digits);
    const lastBit = getNumberBit(lastCountRef.current, digits);
    if (currentBit === undefined) {
        return null;
    }

    useUpdateEffect(() => {
        lastCountRef.current = count;
    }, [count]);

    const diff = lastCountRef.current - count;
    const bitDiff = Math.abs(lastBit - currentBit);

    let position;
    // 如跳转不是连续的
    if (bitDiff !== 1 && bitDiff !== 0) {
        if (diff < 0) {
            position = 20 + currentBit;
        } else {
            position = currentBit;
        }
    } else {
        position = 10 + currentBit;
    }

    return position;
}

export function ScrollNumber(props: ScrollNumberItemProps) {
    const { prefixCls = "xy-scroll-number-item", className, digits = 0, count = 0 } = props;
    const ref = useRef(null);
    const position = useScrollNumber(count, digits);

    function handleTransitionEnd(e: React.TransitionEvent<HTMLSpanElement>) {
        const element = ref.current as HTMLElement;
        if (element && (position < 10 || position >= 20)) {
            element.style.transition = "none";
            element.style.transform = `translateY(-${(10 + getNumberBit(count, digits)) * 100}%)`;
            // Tips: 确保dom操作执行完毕
            element && element.scrollTop;
            element.style.transition = null;
        }
    }

    function renderNumberList() {
        const numberList = [];
        for (let i = 0; i < 30; ++i) {
            numberList.push(
                <p className={classNames({ current: position === i })} key={i}>
                    {i % 10}
                </p>
            );
        }
        return numberList;
    }

    return (
        <span ref={ref} className={classNames(prefixCls, className)} onTransitionEnd={handleTransitionEnd} style={{ transform: `translateY(-${position * 100}%)` }}>
            {renderNumberList()}
        </span>
    );
}

export default React.memo(ScrollNumber);
