import React from 'react';

export function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let inList = false;

  const parsedElements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        inCodeBlock = false;
        parsedElements.push(
          <pre key={`code-${i}`} className="my-5 overflow-x-auto rounded-lg border border-black/10 bg-slate-900/95 p-4 text-xs text-indigo-100 shadow-sm dark:border-white/10">
            <code>{codeLines.join('\n')}</code>
          </pre>
        );
        codeLines = [];
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith('- ')) {
      inList = true;
      listItems.push(
        <li key={i} className="ml-5 list-disc text-sm leading-relaxed text-slate-600 dark:text-zinc-300 md:text-base">
          {line.replace('- ', '')}
        </li>
      );
      continue;
    }

    if (inList) {
      parsedElements.push(
        <ul key={`list-${i}`} className="mb-4 space-y-1.5">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }

    if (line.startsWith('# ')) {
      parsedElements.push(
        <h1 key={i} className="mb-4 mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent md:text-3xl">
          {line.replace('# ', '')}
        </h1>
      );
      continue;
    }
    if (line.startsWith('## ')) {
      parsedElements.push(
        <h2 key={i} className="mb-3 mt-7 text-xl font-bold tracking-tight text-slate-800 dark:text-zinc-100 md:text-2xl">
          {line.replace('## ', '')}
        </h2>
      );
      continue;
    }
    if (line.startsWith('### ')) {
      parsedElements.push(
        <h3 key={i} className="mb-2 mt-6 text-lg font-semibold tracking-tight text-slate-800 dark:text-zinc-200 md:text-xl">
          {line.replace('### ', '')}
        </h3>
      );
      continue;
    }

    if (line.trim() !== '') {
      parsedElements.push(
        <p key={i} className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 md:text-base">
          {line}
        </p>
      );
    }
  }

  if (inList && listItems.length > 0) {
    parsedElements.push(
      <ul key="list-final" className="mb-4 space-y-1.5">
        {listItems}
      </ul>
    );
  }

  return <div className="markdown-body max-w-none">{parsedElements}</div>;
}
