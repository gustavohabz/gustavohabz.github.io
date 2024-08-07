import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useTranslation()
  
  return (
    <div className="text-center my-32">
        <h1
            className="text-6xl header-title"
        >
            Gustavo Habitzreiter
        </h1>
        <h2 className="text-3xl header-subtitle text-slate-200 text-center my-12">
            { t('desenvolvedor_web') }
        </h2>
        
        <LanguageSwitcher />
    </div>
  )
}
