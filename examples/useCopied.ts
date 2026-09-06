import * as React from "react";

/** Copies text, then flags `copied` long enough for the button to show a check. */
export function useCopied(): [boolean, (text: string) => Promise<void>] {
  const [copied, setCopied] = React.useState(false);

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return [copied, copy];
}
