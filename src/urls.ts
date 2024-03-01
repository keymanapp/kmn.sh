const km = (matches: RegExpMatchArray): string =>  "https://help.keyman.com/developer/latest-version/reference/messages/" + matches[1];
const kb = (matches: RegExpMatchArray): string => "https://help.keyman.com/knowledge-base/?id=" + matches[1];

type RedirectFunction = (matches: RegExpMatchArray) => string;
interface ShortURL { match: string|RegExp; redirect: string|RedirectFunction };

export const shortURLs: ShortURL[] = [
  { match: /^(km[0-9a-f]{5})$/i, redirect: km },
	{ match: /^kb(\d+)$/i, redirect: kb },
	{ match: "submit-keyboard", redirect: "https://help.keyman.com/developer/keyboards/" },
];
