const km = (matches: RegExpMatchArray): string =>  "https://help.keyman.com/developer/latest-version/reference/messages/" + matches[1];
const kb = (matches: RegExpMatchArray): string => "https://help.keyman.com/knowledge-base/?id=" + matches[1];

type RedirectFunction = (matches: RegExpMatchArray) => string;
interface ShortURL { match: string|RegExp; redirect: string|RedirectFunction };

export const shortURLs: ShortURL[] = [
  { match: /^(km[0-9a-f]{5})$/i, redirect: km },
	{ match: /^kb(\d+)$/i, redirect: kb },

	// Keyman Roadmap presentation, March 2024 LTCon
	{ match: "ltcon2024", redirect: "https://docs.google.com/presentation/d/1PvhQTA3KkQoddp_opqsJkP6cCGXDE8cP8AiIvW27Bac/edit?usp=sharing"},
	// Keyman LDML Keyboards presentation, March 2024 LTCon
	{ match: "ltcon2024ldml", redirect: "https://docs.google.com/presentation/d/1UBjNHdEdiiTb33H6AfqRtJqOXtl9ZBwg20ZMW7illZU/edit?usp=sharing"},

	// { match: "submit-keyboard", redirect: "https://help.keyman.com/developer/keyboards/" },
];
