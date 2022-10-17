import { FC, memo } from "react";

interface IProps {}
let Index: FC<IProps> = function (props) {
  return (
    <>
      <h1 className="test">index</h1>
    </>
  );
};

export default memo(Index);
