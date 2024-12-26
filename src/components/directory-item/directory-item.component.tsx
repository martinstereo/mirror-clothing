import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';

type DirectoryItemProps = {
  category: {
    id: number;
    imageUrl: string;
    title: string;
    route: string;
  };
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { id, imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(`/${route}`);
  };

  return (
    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;