import styled from 'styled-components';

interface BackgroundImageProps {
  imageUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  border-radius: 10px;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;

    @media screen and (min-width: 800px) {
      font-size: 28px;
    }
  }

  p {
    font-weight: lighter;
    font-size: 16px;

    @media screen and (min-width: 800px) {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 45px 15px;
    height: 70px;
  }
`;

interface DirectoryItemContainerProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const DirectoryItemContainer = styled.div<DirectoryItemContainerProps>`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;
  border-radius: 5px;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &.large {
    height: 380px;

    @media screen and (max-width: 800px) {
      height: 240px;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
    min-width: 40%;
  }

  @media screen and (max-width: 400px) {
    height: 180px;
    min-width: 90%;
    margin: 0 0 15px;

    &:first-child {
      margin-right: 0;
    }

    &:last-child {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;
