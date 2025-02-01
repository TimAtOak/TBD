import { Header } from "./Header";
import { Layout } from "./Layout";

export const Router = () => {
  //this is a placeholder for the router
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          overflowX: "hidden",
          marginTop: "3rem",
        }}
      >
        <Header />
      </div>
      <Layout />
    </>
  );
};
