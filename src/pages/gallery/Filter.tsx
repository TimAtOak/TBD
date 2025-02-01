import {
  Dropdown,
  Option,
  Input,
  makeStyles,
  tokens,
} from "@fluentui/react-components";

const useClasses = makeStyles({
  filterWrapper: {
    display: "flex",
    verticalAlign: "middle",
    gap: tokens.spacingHorizontalS,
    height: "50px",
    padding: tokens.spacingHorizontalS + " 0",
  },
});

export const Filter = () => {
  const { filterWrapper } = useClasses();
  return (
    <div className={filterWrapper}>
      <Input style={{ height: "0.5rem" }} type="text" placeholder="Search" />
      <div>
        <Dropdown placeholder="Select an type">
          <Option>Computer</Option>
          <Option>Computer</Option>
        </Dropdown>
      </div>
      <div>
        <Dropdown placeholder="Select an age">
          <Option>New</Option>
          <Option>Old</Option>
        </Dropdown>
      </div>
    </div>
  );
};
