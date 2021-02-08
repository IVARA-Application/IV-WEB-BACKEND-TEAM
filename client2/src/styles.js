import styled from "styled-components";

//Introduciton Section

export const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Cards = styled.div`
  width: 100%;
  margin: auto;
  font-family: "Roboto", sans-serif;
  display: flex;
  background: white;
  margin-top: 10rem;
  padding: 0rem 2rem;
  justify-content: center;
  color: #4e5de1;
  letter-spacing: 5px;
  -webkit-letter-spacing: 5px;
  font-weight: 400;
  .arrow {
    margin: 3rem 0rem;
  }
  .card-desc {
    padding: 1rem 0rem;
    margin: 2rem 0rem;
    font-size: 2rem;
  }
  .short-desc {
    font-size: 1.2rem;
    color: #999;
  }
  .icon img {
    border-radius: 12px;
    box-shadow: -5px 15px 30px 0px rgba(0, 0, 0, 0.25);
    animation: anime 0.75s infinite linear alternate 0.1s;
    @keyframes anime {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-10px);
      }
    }
  }
  .second {
    animation: anime 0.75s infinite linear alternate 0.2s;
  }
  .third {
    animation: anime 0.75s infinite linear alternate 0.3s;
  }
`;

export const ArlCard = styled.div`
  padding: 0rem 2rem;
  margin: 0 1rem;
  /* min-height: 50vh; */
  text-align: center;
`;
export const EepCard = styled.div`
  padding: 0rem 2rem;
  margin: 0 1rem;
  min-height: 50vh;
  text-align: center;
`;
export const DoubtsCard = styled.div`
  padding: 0rem 2rem;
  margin: 0 1rem;
  min-height: 50vh;
  text-align: center;
`;

//About Section

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 90%;
  margin: auto;
  flex-wrap: wrap;
`;

export const LeftSide = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    color: #4e5de1;
    font-weight: 500;
    font-size: 2.8rem;
    letter-spacing: 6px;
  }
  p {
    padding: 4rem 0rem;
    color: #6f6e6d;
    font-size: 1.5rem;
    letter-spacing: 5px;
  }
  button {
    font-size: 1.2rem;
    background-blend-mode: pass-through;
    letter-spacing: 6px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  min-height: 80vh;
  position: relative;

  .circle {
    position: absolute;
    z-index: -2;
    top: 20%;
    scale: 1.18;
    left: 21%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    animation: circleAnime 10s infinite linear;
    @keyframes circleAnime {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

export const AboutCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  letter-spacing: 4px;
  justify-content: center;
  margin: 6rem 0rem;
  padding-top: 5rem;
  text-align: center;
  p {
    margin: 0rem 0rem 2rem 0rem;
    font-size: 1.5rem;
    text-shadow: 0px 10px 15px rgba(78, 93, 225, 0.47);
  }
  span {
    color: #4e5de1;
  }
`;

export const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

//Entrance Section

export const Entrance = styled.div`
  font-family: "Poppins", sans-serif;
  h1 {
    font-size: 2.25rem;
    color: #4e5de1;
    padding-top: 6rem;
    letter-spacing: 4px;
  }
  P {
    color: #6f6e6d;
    font-size: 1.25rem;
    padding: 4rem 0rem 2.5rem 0rem;
    letter-spacing: 3px;
  }
  text-align: center;
  align-items: center;
  .girl {
    padding-top: 11rem;
    align-self: center;
    border-radius: 10px;
  }
`;

// Skill Section

export const SkillContainer = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    font-size: 2.25rem;
    color: #4e5de1;
    padding-top: 6rem;
    letter-spacing: 4px;
  }
  P {
    color: #6f6e6d;
    font-size: 1.25rem;
    padding: 4rem 0rem 2.5rem 0rem;
    letter-spacing: 3px;
  }
  .desc {
    align-items: center;
  }
  .skill-con {
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
  }
  .skill-left {
    width: 50%;
    margin-left: 6rem;
  }
`;

//Virtual tuition Section

export const VtcMain = styled(SkillContainer)`
  .vtc-con {
    display: flex;
    justify-content: center;
    text-align: left;
    align-items: center;
  }
  .desc {
    margin-bottom: 6rem;
  }
  .vtc-left {
    width: 50%;
    margin-left: 6rem;
    text-align: center;
  }
  .vtc-right {
    width: 50%;
  }
  .vtc {
    border-radius: 5px;
  }
`;

//Study Aboard Section

export const SacMain = styled(Entrance)`
  h1 {
    margin-bottom: 4rem;
  }
`;

//Previous Year Papers
export const PypContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  h1 {
    font-size: 2.25rem;
    color: #4e5de1;
    padding-top: 6rem;
    letter-spacing: 4px;
  }
  P {
    color: #6f6e6d;
    font-size: 1.25rem;
    padding: 2rem 0rem 1rem 0rem;
    letter-spacing: 3px;
  }
  .img {
    padding-right: 20rem;
    .girl1 {
      border-radius: 5px;
    }
  }
`;
