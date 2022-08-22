import CopyToClipboard from "react-copy-to-clipboard";

export const CopyClipboard = ({ value, children }) => {
  return (
    <>
      <CopyToClipboard text={value}>{children}</CopyToClipboard>
    </>
  );
};
