import { Card, tokens } from "@fluentui/react-components";

export const ItemListCard = () => {
  const resolveAsset = (asset: string) => {
    const ASSET_URL =
      "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
  };

  return (
    <Card
      style={{
        display: "grid",
        gridTemplateColumns: "max-content 1fr",
        gap: tokens.spacingHorizontalM,
      }}
    >
      <div>
        <img src={resolveAsset("office1.png")} alt="Presentation Preview" />
      </div>
      <div>
        <h3>Item Name</h3>
        <p>Item Description</p>
      </div>
    </Card>
  );
};
