import React from "react";
import { render } from "@testing-library/react";
import { Badge } from "../src";

describe("Badge", () => {
    test("render", () => {
        const wrapper = render(
            <Badge count={5}>
                <a>Link</a>
            </Badge>,
        );
        const link = wrapper.getByText("Link");
        expect(link.parentElement.classList.contains("xy-badge")).toBeTruthy();
        const p = wrapper.container.querySelector("p.current");
        expect(p.textContent).toBe("5");
    });

    test("over flow", () => {
        const wrapper = render(
            <Badge count={60} overflowCount={10}>
                <a>Link</a>
            </Badge>,
        );

        const numbers = wrapper.container.querySelectorAll(".xy-scroll-number-item") as NodeListOf<HTMLElement>;
        expect(numbers[0].querySelector("p.current").textContent).toBe("1");
        expect(numbers[1].querySelector("p.current").textContent).toBe("0");

        const plus = wrapper.container.querySelector(".xy-scroll-number__text");
        expect(plus.textContent).toBe("+");
    });

    test("dot mode", () => {
        const wrapper = render(
            <Badge dot={true}>
                <a>Link</a>
            </Badge>,
        );
        const dot = wrapper.container.querySelector(".xy-badge-dot");
        expect(dot).toBeDefined();
    });

    test("status", () => {
        const wrapper = render(
            <Badge status="processing" text="加载中">
                <a>Link</a>
            </Badge>,
        );
        const text = wrapper.getByText("加载中");
        expect(text.classList.contains("xy-badge-dot-text")).toBeTruthy();
        expect(text.parentElement.classList.contains("xy-badge-dot__status_processing")).toBeTruthy();
    });
});
