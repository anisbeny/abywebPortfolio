export default function formatDate(date: Date) {
    return new Intl.DateTimeFormat("fr-FR").format(date);
  }