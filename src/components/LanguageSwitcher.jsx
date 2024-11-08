import React from 'react'
import { useLanguageHook } from './../hooks/useLanguageHook'

export const LanguageSwitcher = () => {

    const [enLang, setEnLang] = useLanguageHook();

  return (
    <div className="switch inline-block top-2">
        <input 
            value={enLang}
            onChange={(e) => setEnLang(e.target.checked)}
            checked={enLang}
            id="langToggle"
            type="checkbox" 
            className="check-toggle check-toggle-round-flat"
        />
        <label htmlFor="langToggle"></label>
        <span className="on">BR</span>
        <span className="off">EN</span>
    </div>
  )
}
