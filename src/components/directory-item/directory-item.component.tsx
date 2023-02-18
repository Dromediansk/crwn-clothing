import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../directory/directory.component";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

export type DirectoryItemProps = {
  directoryCategory: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ directoryCategory }) => {
  const { title, imageUrl, route } = directoryCategory;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
