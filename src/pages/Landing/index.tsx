import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/theme-provider-context/theme-provider";
import { Languages } from "@/utils/enum/languages";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useTheme();

  const changeLanguage = (language: Languages) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>

      <Button
        onClick={() => changeLanguage(Languages.EN)}
        className={cn("bg-red-300", { "bg-green-300": i18n.language === "en" })}
      >
        English
      </Button>
      <Button
        onClick={() => changeLanguage(Languages.FR)}
        className={cn("bg-red-300", { "bg-green-300": i18n.language === "fr" })}
      >
        Français
      </Button>
      <Button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle
      </Button>
    </div>
  );
};

export default LandingPage;
