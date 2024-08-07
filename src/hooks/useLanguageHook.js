import { useEffect, useState } from "react";
import i18n from './../i18n'

export const useLanguageHook = () => {
    const [enLang, setEnLang] = useState(false);
    
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    useEffect(() => {
        if(enLang){
            changeLanguage("en")
        } else {
            changeLanguage("br")
        }
    }, [enLang])

    useEffect(() => {
        setEnLang((i18n.language === 'en'))
    }, [i18n.language])

    return [enLang, setEnLang];
}