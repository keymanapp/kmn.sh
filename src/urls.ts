const km = (matches: RegExpMatchArray): string =>  "https://help.keyman.com/developer/latest-version/reference/messages/" + matches[1].toLowerCase();
const kb = (matches: RegExpMatchArray): string => "https://help.keyman.com/knowledge-base/?id=" + matches[1];

type RedirectFunction = (matches: RegExpMatchArray) => string;
interface ShortURL { match: string|RegExp; redirect: string|RedirectFunction };

export const shortURLs: ShortURL[] = [
  // Keyman Developer compiler error short codes KM#####, e.g. KM02010, km02010
  { match: /^(km[0-9a-f]{5})$/i, redirect: km },

  // Knowledge Base articles, e.g. kb00040, kb40, KB40
  { match: /^kb(\d+)$/i, redirect: kb },

  /*
   * Conferences and presentations, starting in 2024
   */

  // Keyman Roadmap presentation, March 2024 LTCon
  { match: "ltcon2024", redirect: "https://docs.google.com/presentation/d/1PvhQTA3KkQoddp_opqsJkP6cCGXDE8cP8AiIvW27Bac/edit?usp=sharing"},
  // Keyman LDML Keyboards presentation, March 2024 LTCon
  { match: "ltcon2024ldml", redirect: "https://docs.google.com/presentation/d/1UBjNHdEdiiTb33H6AfqRtJqOXtl9ZBwg20ZMW7illZU/edit?usp=sharing"},
  // Keyman What's New presentation, April 2024 LTCT
  { match: "ltct2024", redirect: "https://docs.google.com/presentation/d/1lQlbvxA0w_In9lq7heHYBqkK0h06p-UjMBwpFv9_IZA/edit?usp=sharing"},
  // Keyman What's New presentation, August 2024 LTUse
  { match: "ltuse2024", redirect: "https://docs.google.com/presentation/d/15mtIjbZ4M9NxI8IrHu5HDn8517ueUs3m10yK1i70WII/edit?usp=sharing"},
  // Keyman + LDML + CLDR seminar at CANIL, September 2024
  { match: "canil2024", redirect: "https://docs.google.com/presentation/d/1n0X_-Nu0WAc7R1iNXYUwBvQLySGRAVubiAn-Zn3olVQ/edit?usp=sharing"},
  // LDML Workshop at FPCC, September 2024
  { match: "fpcc2024ldml", redirect: "https://docs.google.com/presentation/d/1eCQBmaiJoPK77MCPp0KvBgFefnLBLLx066RHFlqRmqA/edit?usp=sharing"},

  /*
   * Keyman Videos
   */

  // Keyman jobs 'get involved' video, 2024
  { match: "video-get-involved-de", redirect: "https://www.youtube-nocookie.com/embed/UZ_lKqRlEBE?hl=de&cc_lang_pref=de&cc_load_policy=1"},
  { match: "video-get-involved-en", redirect: "https://www.youtube-nocookie.com/embed/UZ_lKqRlEBE?hl=en&cc_lang_pref=en&cc_load_policy=1"},
];
