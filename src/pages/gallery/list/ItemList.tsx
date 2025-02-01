import { tokens } from "@fluentui/react-components";
import { ItemListCard } from "./ItemListCard";

export const ItemList = () => {
  return (
    <div style={{ display: "grid", gap: tokens.spacingHorizontalM }}>
      <ItemListCard />
      <ItemListCard />
      <ItemListCard />
      <ItemListCard />
      <ItemListCard />
      <ItemListCard />
      <ItemListCard />
      <ItemListCard />
      <ItemListCard />
    </div>
  );
};
