import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

type LangType = 'en_US' | 'ko' | 'ja';

register('ko', koLocale);
export function formatAgo(date: string, lang: LangType = 'en_US') {
  return format(date, lang);
}
