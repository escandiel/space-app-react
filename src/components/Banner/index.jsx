import styled from "styled-components";

const BannerEstilizado = styled.div`
  min-height: 328px;
  max-width: 100%;
  background-image: ${(props) => props.backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  border-radius: 16px;
  span {
    width: 301px;
    height: 144px;
    color: white;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: block;
    position: absolute;
    top: 92px;
    left: 64px;
  }
`;

const Banner = ({ backgroundImage, spanContent }) => {
  return (
    <BannerEstilizado backgroundImage={backgroundImage}>
      <span>{spanContent}</span>
    </BannerEstilizado>
  );
};

export default Banner;
