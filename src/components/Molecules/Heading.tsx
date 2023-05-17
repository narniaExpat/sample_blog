import React from 'react';
import styled from 'styled-components';

type Variant = 'sm' | 'md' | 'lg';

type StyleProps = {
    variant?: Variant;
};

const getFontSize = (variant?: Variant) => {
    switch (variant) {
        case 'sm':
            return '1.2rem';
        case 'md':
            return '1.5rem';
        case 'lg':
            return '2rem';
        default:
            return 'inherit';
    }
};

const getColor = (variant?: Variant) => {
    switch (variant) {
        case 'sm':
            return '#0b678e';
        case 'md':
            return '#055E84';
        case 'lg':
            return '#055E84';
        default:
            return '#inherit';
    }
};

const generateHeadingStyle = ({ variant }: StyleProps) => ({
    fontSize: getFontSize(variant),
    color: getColor(variant)
});

type Tag = 'h1' | 'h2' | 'h3' | 'h4';

type Props<T extends Tag> = StyleProps &
    React.ComponentPropsWithRef<T> & {
        tag: T;
    };

const H1 = styled.h1((props: StyleProps) => generateHeadingStyle(props));
const H2 = styled.h2((props: StyleProps) => generateHeadingStyle(props));
const H3 = styled.h3((props: StyleProps) => generateHeadingStyle(props));
const H4 = styled.h3((props: StyleProps) => generateHeadingStyle(props));

const Heading = <T extends Tag>({ tag, ...props }: Props<T>) => {
    if (tag === 'h1') return <H1 {...props} />;
    if (tag === 'h2') return <H2 {...props} />;
    if (tag === 'h3') return <H3 {...props} />;
    return <H4 {...props} />;
};

export default Heading;
