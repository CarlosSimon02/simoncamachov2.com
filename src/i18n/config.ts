export const languages = [
  {
    name: "English",
    code: "en",
  },
  {
    name: "Filipino",
    code: "fil",
  },
];

export const config = {
  locales: languages.map((language) => language.code),
  defaultLocale: languages[0].code,
  localeDetection: false,
};
