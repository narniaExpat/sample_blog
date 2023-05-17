import styled, { CSSObject } from 'styled-components';

export const LatestPostsTop = styled.div(
    () =>
        ({
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center'
        } as CSSObject)
);
