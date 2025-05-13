export default function MaterialIcons() {
  return (
    // eslint-disable-next-line
    <link
      href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
      rel='stylesheet'
    />
  );
}

/* Notas:
// NextJS não reconhece Material Icons como URL de ICON mas de fontes
// Isso entra em conflito, já que ele usa Next/Google para ser mais eficiente
// Adicionei um eslint-disable para remover o warning
// Efeito colateral: Posso ter um erro de build
*/
