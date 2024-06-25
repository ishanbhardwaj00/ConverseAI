import copy from "copy-to-clipboard";
import "./Reply.css";
import Highlight from "react-highlight";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";
import { useState } from "react";

type MessageType = {
  message: string;
};

// import { useEffect, useRef } from'react';

// const CodeHighlighter = ({ language, code }: { language: string, code: string }) => {
//     const codeRef = useRef(null);
//         useEffect(() => {
//             if(codeRef.current) {
//                 Prism.highlightElement(codeRef.current);
//             }
//         }, [code]);

//   return (
//     <pre>
//         <code ref={codeRef} className={`language-${language}`}>
//             {code}
//         </code>
//     </pre>
//   );
// };

const Reply = ({ message }: MessageType) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="reply">
      <div className="reply-header">
        <span>language</span>
        {!copied ? (
          <LuClipboard
            size={18}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCopied(true);
              copy(message, {
                message: "Copied to clipboard!",
              });
            }}
          />
        ) : (
          <LuClipboardCheck
            size={18}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCopied(true);
              copy(message, {
                message: "Copied to clipboard!",
              });
            }}
          />
        )}
      </div>
      <Highlight language="javascript">{message}</Highlight>
    </div>
  );
};

export default Reply;
