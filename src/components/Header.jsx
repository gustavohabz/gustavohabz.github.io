import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from './../i18n'

export const Header = () => {
  const changeLanguage = (lang) => {
      i18n.changeLanguage(lang)
  }
  const [enLang, setEnLang] = useState(false);

  useEffect(() => {
      if(enLang){
          changeLanguage("en")
      } else {
          changeLanguage("br")
      }
  }, [enLang])

  
  const { t } = useTranslation()
  
  return (
    <>
        <h1
            className="text-6xl header-title"
        >
            Gustavo Habitzreiter
        </h1>
        <h2 className="text-3xl header-subtitle text-slate-200 text-center my-12">
            { t('desenvolvedor_web') }
        </h2>
        
        <div className="switch sm:inline-block hidden">
            <input 
                value={enLang}
                onChange={(e) => setEnLang(e.target.checked)}
                id="langToggle"
                type="checkbox" 
                className="check-toggle check-toggle-round-flat"
            />
            <label htmlFor="langToggle"></label>
            <span className="on">BR</span>
            <span className="off">EN</span>
        </div>
    </>
  )
}
