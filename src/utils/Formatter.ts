import { formatDistanceToNow, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const DateFormatter = new Intl.DateTimeFormat('pt-BR')

export const createdDateRelativeToNow = (createdAt: any) => {
  const date = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: false
  });

  return date;
}