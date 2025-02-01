import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { GridRegular, AppsListDetailRegular } from "@fluentui/react-icons";
import { SingleView } from "./SingleView";
import { Filter } from "./Filter";
import { ItemList } from "./list/ItemList";

const useClasses = makeStyles({
  galleryWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "1rem",
  },
});
type GalleryProps = {
  isGallery: boolean;
  setGalleryView: (isGallery: boolean) => void;
};
export const Gallery = ({ isGallery, setGalleryView }: GalleryProps) => {
  const { galleryWrapper } = useClasses();

  return (
    <div style={{ padding: tokens.spacingHorizontalL }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Suche nach deinem Produkt</h1>
        <div style={{ verticalAlign: "middle", padding: "0.75rem" }}>
          <Button onClick={() => setGalleryView(true)} icon={<GridRegular />} />
          <Button
            onClick={() => setGalleryView(false)}
            icon={<AppsListDetailRegular />}
          />
        </div>
      </div>
      <Filter />
      {isGallery && (
        <div className={galleryWrapper}>
          <SingleView />
          <SingleView />
          <SingleView />
          <SingleView />
          <SingleView />
          <SingleView />
          <SingleView />
          <SingleView />
        </div>
      )}
      {!isGallery && <ItemList />}
    </div>
  );
};
