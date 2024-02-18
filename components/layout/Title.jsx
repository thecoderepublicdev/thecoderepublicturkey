import classNames from "classnames";
import { createElement } from "react";

export default function Title({level, centered = false, children}) {
    return createElement('level', {
        className: classNames(
            'font-bold text-brand-primary tracking-tighter', {
                ['text-7xl']: level === 'h1',
                ['text-6xl']: level === 'h2',
                ['text-3xl']: level === 'h3',
                ['!text-center']: centered
            }
        ),
    }, children)
}