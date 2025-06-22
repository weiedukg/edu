import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ky: () => import("./dictionaries/ky.json").then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "ky") => dictionaries[locale]()
