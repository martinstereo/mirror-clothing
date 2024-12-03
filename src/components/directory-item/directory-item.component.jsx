import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
