import { formatDistanceToNow, parseISO } from "date-fns";
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

export const teste = (createdAt: any) => {
  const date = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: false
  });

  console.log(date);
}

teste("2023-04-20T23:00:06.834033Z")