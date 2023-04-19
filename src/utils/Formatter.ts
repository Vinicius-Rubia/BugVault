import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import moment from 'moment';

export const DateFormatter = new Intl.DateTimeFormat('pt-BR')

export const publishedDateRelativeToNow = (publishedAt: Date) => {
  const isoDate = moment(publishedAt).format("YYYY-MM-DD HH:mm:ss");
  const date = formatDistanceToNow(new Date(isoDate), {
    locale: ptBR,
    addSuffix: false
  });

  return date;
}
