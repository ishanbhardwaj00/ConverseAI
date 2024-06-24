import './Reply.css';
import Prism from 'prismjs';

type MessageType =  {
    message: string
};

import { useEffect, useRef } from'react';

const CodeHighlighter = ({ language, code }: { language: string, code: string }) => {
    const codeRef = useRef(null);
        useEffect(() => {
            if(codeRef.current) {
                Prism.highlightElement(codeRef.current);
            }
        }, [code]);
 
  return (
    <pre>
        <code ref={codeRef} className={`language-${language}`}>        
            {code}      
        </code>
    </pre>
  );
};

const Reply = ({ message }: MessageType) => {

    return (
        <div>
            <CodeHighlighter language="javascript" code={message} />
        </div>
    );
}

export default Reply;