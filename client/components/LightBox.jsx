import React from "react";
import styled from "styled-components";

const imagePadding = 24;
const pageMargins = 100;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 12px;
    right: 12px;
    border: 0;
    padding: 0;
    margin: 0;
    background: transparent;
    color: inherit;
    height: 24px;
    width: 24px;
    font-size: 24px;
    font-family: inherit;
    outline: 0;
    &:hover {
        background: rgba(255, 255, 255, 0.5);
    }
    &:active {
        color: #c71742;
    }
`;

const ImageBox = styled.div`
    position: absolute;
    padding: ${imagePadding}px;
    background-color: #fff;
    img {
        display: block;
    }
    .attribution {
        position: absolute;
        background: #000;
        font-size: 14px;
        bottom: ${imagePadding}px;
        left: ${imagePadding}px;
        padding: 2px 4px;
    }
`;

const arrowShared = `
    position: absolute;
    top: 0;
    bottom: 0;
    width: 25%;
    cursor: pointer;
`;

const arrowBeforeShared = `
    font-size: 60px;
    line-height: 17px;
    font-weight: bold;
    height: 60px;
    width: 60px;
    box-sizing: border-box;
    padding-top: 16px;
    border-radius: 100%;
    background: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0;
    transition: opacity 147ms ease-in-out;
`;

const arrowHoverShared = `
    :hover:before {
        opacity: 0.6;
    }
`;

const LeftArrow = styled.div`
    left: 0;
    ${arrowShared}
    :before {
        content: '\u2039';
        padding-left: 17px;
        left: ${imagePadding + 8}px;
        ${arrowBeforeShared}
    }
    ${arrowHoverShared}
`;

const RightArrow = styled.div`
    right: 0;
    ${arrowShared}
    :before {
        content: '\u203a';
        padding-left: 21px;
        right: ${imagePadding + 8}px;
        ${arrowBeforeShared}
    }
    ${arrowHoverShared}
`;

class LightBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            height: 0,
            width: 0,
        }
        this.resizeTimer = null;
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        const currentPhoto = this.props.photos[this.props.current];
        const imgStyle = this.state.loaded ? {
            height: this.state.height,
            width: this.state.width,
        } : {
            height: 'auto',
            width: 'auto',
            opacity: 0,
        }
        return (
            <Overlay onClick={this.handleOverlayClick}>
                <CloseButton onClick={this.handleCloseButtonClick}>&times;</CloseButton>
                <ImageBox
                    onClick={this.handleImageBoxClick}
                    style={this.state.loaded ? null : { opacity: 0 }}
                >
                    <LeftArrow onClick={this.handleLeftArrowClick} />
                    <img
                        src={currentPhoto.photo}
                        style={imgStyle}
                        onLoad={this.handleImageLoad}
                    />
                    {currentPhoto.attribution !== 'unknown' &&
                        <div className='attribution'>Photo by {currentPhoto.attribution}</div>
                    }
                    <RightArrow onClick={this.handleRightArrowClick} />
                </ImageBox>
            </Overlay>
        );
    }

    handleImageLoad = (e) => {
        const rect = e.target.getBoundingClientRect();
        this.setImageSize(rect.height, rect.width);
        this.setState({
            loaded: true,
        });
    }

    handleOverlayClick = () => {
        this.closeLightBox();
    }

    handleCloseButtonClick = () => {
        this.closeLightBox();
    }

    handleImageBoxClick = (e) => {
        e.stopPropagation();
    }

    handleLeftArrowClick = () => {
        this.navigateImages(-1)
    }

    handleRightArrowClick = () => {
        this.navigateImages(1)
    }

    handleWindowResize = () => {
        if (!this.state.loaded) {
            return;
        }
        if (this.resizeTimer !== null) {
            cancelAnimationFrame(this.resizeTimer);
        }
        this.resizeTimer = requestAnimationFrame(() => {
            this.setImageSize(this.state.height, this.state.width);
        });
    }

    navigateImages = (direction) => {
        const lastPhotoIndex = this.props.photos.length - 1;
        const current = this.props.current;
        let newIndex;
        if (current + direction < 0) {
            newIndex = lastPhotoIndex;
        } else if (current + direction > lastPhotoIndex) {
            newIndex = 0;
        } else {
            newIndex = current + direction;
        }
        if (this.props.onNavigate) {
            this.props.onNavigate(newIndex)
        }
    }

    closeLightBox = () => {
        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    setImageSize = (height, width) => {
        const windowHeight = window.innerHeight - (pageMargins * 2) - (imagePadding * 2);
        const windowWidth = window.innerWidth - (pageMargins * 2) - (imagePadding * 2);
        const ratio = width / height;
        if (width > windowWidth) {
            width = windowWidth;
            height = width / ratio;
        }
        if (height > windowHeight) {
            height = windowHeight;
            width = height * ratio;
        }
        // todo: logic to make the image get larger if it can on resize
        this.setState({
            height,
            width,
        });
    }
}

export default LightBox;