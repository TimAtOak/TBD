import {
  Card,
  CardPreview,
  Text,
  CardHeader,
  Caption1,
  Button,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";

type GalleryCardProps = {
  onClick: () => void;
};

export const GalleryCard = ({ onClick }: GalleryCardProps) => {
  const resolveAsset = (asset: string) => {
    const ASSET_URL =
      "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
  };

  return (
    <Card appearance="filled" onClick={onClick}>
      <CardPreview
        logo={<img src={resolveAsset("logo3.svg")} alt="Figma app logo" />}
      >
        <img src={resolveAsset("office1.png")} alt="Presentation Preview" />
      </CardPreview>

      <CardHeader
        header={<Text weight="semibold">iOS App Prototype</Text>}
        description={<Caption1>You created 53m ago</Caption1>}
        action={
          <Button
            appearance="transparent"
            icon={<MoreHorizontal20Regular />}
            aria-label="More actions"
          />
        }
      />
    </Card>
  );
};
