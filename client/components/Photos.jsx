import * as React from 'react';
import promoThumb from '../../public/img/promo-thumb.jpg';
import styled from 'styled-components';

const ThumbOverlay = styled.div`
    position: relative;
    width: 50%;
    transition: 0.5s ease;
    &:hover img {
        opacity: 1;
        cursor: pointer;
    }
    img {
        display: block;
        border: 1px solid #eee;
        width: 100%;
        height: auto;
        opacity: 0.5;
    }
    &:hover div {
        opacity: 1;
        cursor: pointer;
    }  
    div {
        position: absolute;
        text-align: center;
        color: #eee;
        font: inherit;
        font-size: 2em;
        height: 60%;
        width: 100%;
        bottom: 0;
        opacity: 0;        
    }
`

const Photos = () => {
    return <ThumbOverlay><img src={promoThumb} /><div>PROMO</div></ThumbOverlay>
}

export default Photos