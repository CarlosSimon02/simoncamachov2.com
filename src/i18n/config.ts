import PHFlag from "@/app/assets/svgs/phFlag.svg";
import USFlag from "@/app/assets/svgs/usFlag.svg";

export const languages = [
  {
    name: "English",
    code: "en",
    icon: USFlag,
  },
  {
    name: "Filipino",
    code: "fil",
    icon: PHFlag,
  },
];

export const config = {
  locales: languages.map((language) => language.code),
  defaultLocale: languages[0].code,
  localeDetection: false,
};
