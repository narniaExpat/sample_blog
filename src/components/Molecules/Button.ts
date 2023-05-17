import styled from 'styled-components';

type Variant = 'danger' | 'primary';

type Props = {
    variant?: Variant;
    inline?: boolean;
};

const getBackgroundColor = (variant?: Variant) => {
    if (variant && variant === 'danger') return '#ef475e';
    return '#208fd8';
};

const Button = styled.button(({ variant, inline }: Props) => ({
    display: inline ? 'inline' : 'block',
    margin: '0.5rem',
    padding: '0.5rem',
    color: 'wheat',
    fontWeight: 'bold',
    border: '1px solid #ccbdbd',
    borderRadius: '4px',
    backgroundColor: getBackgroundColor(variant),
    cursor: 'pointer'
}));

export default Button;
