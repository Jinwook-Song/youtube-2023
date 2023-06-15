import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import jaLocale from 'timeago.js/lib/lang/ja';

type LangType = 'en_US' | 'ko' | 'ja';

register('ko', koLocale);
register('ja', jaLocale);
export function formatAgo(date: string, lang: LangType = 'en_US') {
  return format(date, lang);
}
