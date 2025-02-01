import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { Navigation24Regular, Person24Regular } from "@fluentui/react-icons";
import logo from "../../assets/logo.png";
const useClasses = makeStyles({
  headerWrapper: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralBackground1,
    padding: tokens.spacingHorizontalM,
    display: "grid",
    position: "fixed",
    zIndex: 1,
    top: 0,
    width: "100%",
    boxSizing: "border-box",
    gridTemplateColumns: "max-content max-content",
    justifyContent: "space-between",
  },
});

export const Header = () => {
  const { headerWrapper } = useClasses();
  return (
    <header className={headerWrapper}>
      <div>
        <img style={{ height: "30px" }} src={logo} />
      </div>
      <div>
        <Button appearance="primary" icon={<Person24Regular />} />
        <Button appearance="primary" icon={<Navigation24Regular />} />
      </div>
    </header>
  );
};
