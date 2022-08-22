import { useState } from "react";
import { toast } from "react-hot-toast";
import { RiClipboardLine } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";

export const CopyClipboardCheck = () => {
  const [copy, setCopy] = useState(false);

  const copySuccess = () => {
    toast.success("copiado al portapapeles");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <>
      {copy ? (
        <BsCheckCircleFill style={{color: '#61d345'}}/>
      ) : (
        <RiClipboardLine onClick={() => copySuccess()} className="pointer" />
      )}
    </>
  );
};
