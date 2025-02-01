import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  BrandVariants,
  createDarkTheme,
  createLightTheme,
  FluentProvider,
  Theme,
} from "@fluentui/react-components";

const greenTheme: BrandVariants = {
  10: "#030400",
  20: "#181B00",
  30: "#212D00",
  40: "#263B00",
  50: "#2A4900",
  60: "#2D5800",
  70: "#2E6800",
  80: "#2B7800",
  90: "#1F8900",
  100: "#24981D",
  110: "#2FA836",
  120: "#3FB74E",
  130: "#54C568",
  140: "#6DD383",
  150: "#89E0A0",
  160: "#AAECBD",
};

const lightTheme: Theme = {
  ...createLightTheme(greenTheme),
};

const darkTheme: Theme = {
  ...createDarkTheme(greenTheme),
};

darkTheme.colorBrandForeground1 = greenTheme[110];
darkTheme.colorBrandForeground2 = greenTheme[120];

createRoot(document.getElementById("root")!).render(
  <FluentProvider theme={lightTheme}>
    <StrictMode>
      <App />
    </StrictMode>
  </FluentProvider>
);
