import React from 'react';

export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = '';

  const parsedElements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        inCodeBlock = false;
        parsedElements.push(
          <pre key={`code-${i}`} className="p-4 rounded-lg bg-black/50 border border-white/10 overflow-x-auto my-4 text-xs font-mono text-indigo-300">
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
        codeLines = [];
      } else {
        inCodeBlock = true;
        codeLang = line.replace('```', '').trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith('# ')) {
      parsedElements.push(
        <h1 key={i} className="text-2xl md:text-3xl font-extrabold tracking-tight mt-8 mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {line.replace('# ', '')}
        </h1>
      );
      continue;
    }
    if (line.startsWith('## ')) {
      parsedElements.push(
        <h2 key={i} className="text-lg md:text-xl font-bold tracking-tight mt-6 mb-3 text-slate-800 dark:text-zinc-100">
          {line.replace('## ', '')}
        </h2>
      );
      continue;
    }
    if (line.startsWith('### ')) {
      parsedElements.push(
        <h3 key={i} className="text-base md:text-lg font-semibold tracking-tight mt-5 mb-2 text-slate-800 dark:text-zinc-200">
          {line.replace('### ', '')}
        </h3>
      );
      continue;
    }

    if (line.startsWith('- ')) {
      parsedElements.push(
        <li key={i} className="ml-6 list-disc text-slate-600 dark:text-zinc-300 mb-1.5 leading-relaxed text-sm md:text-base">
          {line.replace('- ', '')}
        </li>
      );
      continue;
    }

    if (line.trim() !== '') {
      parsedElements.push(
        <p key={i} className="text-slate-600 dark:text-zinc-300 leading-relaxed mb-4 text-sm md:text-base">
          {line}
        </p>
      );
    }
  }

  return <div className="markdown-body">{parsedElements}</div>;
}
