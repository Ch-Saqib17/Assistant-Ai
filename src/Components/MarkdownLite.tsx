import Link from "next/link";
import React, { FC } from "react";
interface MarkdownLiteProps {
  text: string;
}

const MarkdownLite: FC<MarkdownLiteProps> = ({ text }) => {
  const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchStart = match.index;
    const matchEnd = matchStart + fullMatch.length;

    if (lastIndex < matchStart) {
      parts.push(text.slice(lastIndex, matchStart));
    }
    parts.push(
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={linkUrl}
        className="break-words underline-offset-2 text-blue"
        key={linkUrl}
      >
        {linkText}
      </Link>
    );
    lastIndex = matchEnd;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>{part}</React.Fragment>
      ))}
    </>
  );
};

export default MarkdownLite;
