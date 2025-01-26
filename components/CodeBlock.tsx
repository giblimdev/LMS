import React, { useEffect, useRef, ReactNode } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/a11y-dark.css'; // Import du thème a11y-dark

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = 'plaintext' }) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [language, children]);

  return (
    <pre >
      <code ref={codeRef} className={language}>
        {children}
      </code>
    </pre>
  );
};

export default CodeBlock;