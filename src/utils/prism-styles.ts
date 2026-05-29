import type { CSSProperties } from 'react';

import { atomDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface StyleProps {
  [key: string]: CSSProperties;
}

/**
 * Custom Prism style that overrides the default styles for code blocks and tokens.
 */
export const prismCustom = {
  ...style,
  'code[class*="language-"]': {
    ...((style as StyleProps)['code[class*="language-"]'] ?? {}),
    background: '#1a2318',
    color: '#c8e6b8',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    lineHeight: '1.75',
    margin: '0',
  },
  'pre[class*="language-"]': {
    ...((style as StyleProps)['pre[class*="language-"]'] ?? {}),
    background: '#1a2318',
    border: '1px solid #2d4028',
    borderRadius: '0',
    padding: 'calc(var(--spacing) * 4.5) calc(var(--spacing) * 5)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    margin: '0',
  },
  'token.comment': { color: '#6a9960', fontStyle: 'italic' },
  'token.prolog': { color: '#6a9960' },
  'token.doctype': { color: '#6a9960' },
  'token.cdata': { color: '#6a9960' },

  'token.keyword': { color: '#86efac', fontWeight: '600' },
  'token.selector': { color: '#86efac' },
  'token.important': { color: '#86efac', fontWeight: '700' },
  'token.atrule': { color: '#86efac' },

  'token.function': { color: '#fde68a', fontWeight: '500' },
  'token.class-name': { color: '#fde68a' },

  'token.string': { color: '#fde68a' },
  'token.char': { color: '#fde68a' },
  'token.attr-value': { color: '#fde68a' },
  'token.regex': { color: '#fde68a' },

  'token.number': { color: '#93c5fd' },
  'token.boolean': { color: '#93c5fd' },
  'token.constant': { color: '#93c5fd' },

  'token.property': { color: '#86efac' },
  'token.tag': { color: '#86efac' },

  'token.punctuation': { color: '#94a3b8' },
  'token.operator': { color: '#94a3b8' },

  'token.url': { color: '#67e8f9' },

  'token.variable': { color: '#c8e6b8' },
  'token.builtin': { color: '#7bbf6a' },

  'token.deleted': { color: '#fca5a5' },
  'token.inserted': { color: '#86efac' },
};
