import * as React from 'react';
import LightBox from "./LightBox.jsx";
import styled from 'styled-components';

const ImageContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-gap: 10px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

import photo1 from "../../public/img/photos/2013_ColourPromo01.jpg";
import photo2 from "../../public/img/photos/2014_NicolaCollins01.jpg";
import photo3 from "../../public/img/photos/2014_Stripes.jpg";

const photoList = [
  {
    photo: photo1,
    attribution: "unknown",
  },
  {
    photo: photo2,
    attribution: "Nicola Collins",
  },
  {
    photo: photo3,
    attribution: "unknown",
  },
];

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lightBoxPhoto: -1,
    };
  }
  render() {
    return (
      <>
        <ImageContainer>
          {photoList.map(({photo, attribution}, i) => {
            return (
              <div key={i} onClick={() => { this.handlePhotoClick(i) }}>
                <img src={photo} alt={`Photo by ${attribution}`} />
                <p>Photo by {attribution}</p>
              </div>
            );
          })}
        </ImageContainer>
        {this.state.lightBoxPhoto > -1 &&
          <LightBox
            current={this.state.lightBoxPhoto}
            photos={photoList}
            onClose={this.handleLightBoxClose}
            onNavigate={this.updateCurrentPhoto}
          />
        }
      </>
    );
  }
  handlePhotoClick = (number) => {
    this.setState({
      lightBoxPhoto: number
    });
  }
  handleLightBoxClose = () => {
    this.setState({
      lightBoxPhoto: -1,
    });
  }
  updateCurrentPhoto = (index) => {
    this.setState({
      lightBoxPhoto: index,
    });
  }
}

export default Photos;
