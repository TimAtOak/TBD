import * as React from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  Button,
  useRestoreFocusSource,
  tokens,
  Field,
  Label,
  Text,
  Divider,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { GalleryCard } from "./GalleryCard";

export const SingleView = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Overlay Drawer will handle focus by default, but inline Drawers need manual focus restoration attributes, if applicable
  const restoreFocusSourceAttributes = useRestoreFocusSource();
  const resolveAsset = (asset: string) => {
    const ASSET_URL =
      "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

    return `${ASSET_URL}${asset}`;
  };

  return (
    <>
      <GalleryCard onClick={() => setIsOpen(true)} />
      <Drawer
        {...restoreFocusSourceAttributes}
        type={"overlay"}
        separator
        position="end"
        size="large"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Iphone XR zum verkauf
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <div style={{ marginBottom: "4rem" }}>
            <img
              style={{ width: "100%", borderRadius: tokens.borderRadiusMedium }}
              src={resolveAsset("office1.png")}
              alt="Presentation Preview"
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                overflow: "auto",
                maxWidth: "100%",
                height: "177px",
                gap: "1rem",
              }}
            >
              <img
                style={{
                  height: "160px",
                  borderRadius: tokens.borderRadiusMedium,
                }}
                src={resolveAsset("office1.png")}
                alt="Presentation Preview"
              />
              <img
                style={{
                  height: "160px",
                  borderRadius: tokens.borderRadiusMedium,
                }}
                src={resolveAsset("office1.png")}
                alt="Presentation Preview"
              />
              <img
                style={{
                  height: "160px",
                  borderRadius: tokens.borderRadiusMedium,
                }}
                src={resolveAsset("office1.png")}
                alt="Presentation Preview"
              />
              <img
                style={{
                  height: "160px",
                  borderRadius: tokens.borderRadiusMedium,
                }}
                src={resolveAsset("office1.png")}
                alt="Presentation Preview"
              />
            </div>
            <div>
              <Divider style={{ display: "block", margin: "1rem 0" }} />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                  marginTop: "1rem",
                  gap: "1rem",
                }}
              >
                <Field>
                  <Label>Price</Label>
                  <Text>€ 500</Text>
                </Field>
                <Field>
                  <Label>Location</Label>
                  <Text>Germany</Text>
                </Field>
                <Field>
                  <Label>Condition</Label>
                  <Text>Used</Text>
                </Field>
                <Field>
                  <Label>Brand</Label>
                  <Text>Apple</Text>
                </Field>
              </div>
              <Field style={{ marginTop: "1rem" }}>
                <Label>Description</Label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae nunc vel nulla ultrices ultricies. Nam eget nunc
                scelerisque, fermentum nunc nec, lacinia nunc. Nullam nec
                tincidunt nunc. Donec auctor, ex eu fermentum consectetur, nunc
                eros tincidunt sapien, nec ultricies nunc nunc nec nunc. Nulla
                id
              </Field>
            </div>
          </div>
        </DrawerBody>
      </Drawer>
    </>
  );
};
