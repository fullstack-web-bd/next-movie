export const getFlagImageUrl = (language: string): string | undefined => {
  let flagUrl = "/flags/";

  switch (language) {
    case "English":
      flagUrl += "usa.svg";
      break;
    case "Spanish":
      flagUrl += "spanish.png";
      break;

    default:
      return undefined;
  }

  return flagUrl;
};
