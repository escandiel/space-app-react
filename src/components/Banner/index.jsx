import styled from "styled-components";

const BannerEstilizado = styled.div`
  width: 1156px;
  height: 328px;
  /* background-image: url("/public/banner.svg"); */
  background-image: ${(props) => props.backgroundImage};
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
