import styled, { CSSObject } from 'styled-components';

const generateValue = (value: number) => `${value / 2}rem`;

type Scope = 'x' | 'y';

export type MarginPadding = {
    value: number;
    scope?: Scope;
};

const marginPadding = ({ value, scope }: MarginPadding) => {
    const val = generateValue(value);
    if (scope === 'x') return `0 ${val}`;
    if (scope === 'y') return `${val} 0`;
    return val;
};

type ApplyProps = {
    margin?: MarginPadding;
    padding?: MarginPadding;
};

export const applyMarginAndPadding = ({ margin, padding }: ApplyProps, css: CSSObject = {}) => {
    if (margin) {
        css.margin = marginPadding(margin);
    }
    if (padding) {
        css.margin = marginPadding(margin);
    }
    return css;
};

type Props = {
    margin?: MarginPadding;
    padding?: MarginPadding;
};

const Div = styled.div((props: Props) => applyMarginAndPadding(props));
export default Div;
