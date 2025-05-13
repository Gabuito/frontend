
//Script anti-flash (FUOC)
export function FUOC(){
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const storedTheme = localStorage.getItem('user_theme');
              let theme = '';
              if (storedTheme === '' || storedTheme === 'dark') {
                theme = storedTheme;
              } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme = 'dark';
              }
              document.documentElement.classList.remove('dark');
              document.documentElement.classList.add(theme);
            } catch (e) {}
          })();
        `,
      }}
    />
  );
};
  