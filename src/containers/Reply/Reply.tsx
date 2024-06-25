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

const parseMessage = (message) => {
  const parts = message.split(/(```[\s\S]*?```)/).filter(Boolean);
  const [copied, setCopied] = useState(false);

  return parts.map((part, index) => {
    if (part.startsWith("```") && part.endsWith("```")) {
      const language = part.slice(3, part.indexOf("\n")).trim() || "javascript";
      const code = part.slice(part.indexOf("\n") + 1, -3).trim();
      return (
        <div className="reply">
          <div className="reply-header">
            <span>{language}</span>
            {!copied ? (
              <LuClipboard
                size={18}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCopied(true);
                  copy(code, {
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
                  copy(code, {
                    message: "Copied to clipboard!",
                  });
                }}
              />
            )}
          </div>
          <Highlight key={index} language={language}>
            {code}
          </Highlight>
        </div>
      );
    } else {
      return <p key={index}>{part}</p>;
    }
  });
};

const Reply = ({ message }: MessageType) => {
  const parsedMessage = parseMessage(message);

  return (
    <div style={{ paddingLeft: "4rem", paddingRight: "4rem" }}>
      {parsedMessage}
    </div>
  );
};

export default Reply;
