import React from 'react';
import { PortableText } from '@portabletext/react';

interface RichTextProps {
  content: any;
  className?: string;
  style?: React.CSSProperties;
}

const components = {
  block: {
    normal: ({ children }: any) => <p className="mb-2 leading-relaxed">{children}</p>,
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-semibold mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-medium mb-2">{children}</h4>,
    h5: ({ children }: any) => <h5 className="text-lg font-medium mb-2">{children}</h5>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic mb-4 opacity-80">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const target = value?.blank ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className="underline hover:opacity-80 transition-opacity">
          {children}
        </a>
      );
    },
    customStyle: ({ children, value }: any) => {
      return (
        <span
          style={{
            fontSize: value?.fontSize ? `${value.fontSize}px` : undefined,
            fontFamily: value?.fontFamily || undefined,
            color: value?.color || undefined,
          }}
        >
          {children}
        </span>
      );
    },
  },
};

export function RichText({ content, className = '', style }: RichTextProps) {
  if (!content) return null;

  // Fallback for legacy string content
  if (typeof content === 'string') {
    return <p className={className} style={style}>{content}</p>;
  }

  // If it's Portable Text (array of blocks)
  if (Array.isArray(content)) {
    return (
      <div className={className} style={style}>
        <PortableText value={content} components={components} />
      </div>
    );
  }

  return null;
}
