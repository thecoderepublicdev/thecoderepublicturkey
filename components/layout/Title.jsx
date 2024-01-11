import classNames from "classnames";
import { createElement } from "react";

export default function Title({level, children}) {
    return createElement('level', {
        className: classNames(
            'font-bold text-brand-primary tracking-tighter', {
                ['text-7xl']: level === 'h1',
                ['text-6xl']: level === 'h2',
            }
        ),
    }, children)
}