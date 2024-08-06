import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faAward, faBars, faGraduationCap, faHome, faInfoCircle, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { RedesSociaisMobile } from './RedesSociaisMobile'
import { useTranslation } from 'react-i18next'
import i18n from './../i18n'

export const NavbarFixa = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [closeDrawer, setCloseDrawer] = useState(false)
    const [hiddenFixa, setHiddenFixa] = useState(true)

    const doCloseDrawer = () => {
        setCloseDrawer(true)
        setDrawerOpen(false)
        props.setApplyBlur(false)
    }

    const scrollAndCloseDrawer = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth'})
        doCloseDrawer()
    }

    useEffect(() => {
        if(drawerOpen){
            props.setApplyBlur(true)
        }
    }, [drawerOpen])

    useEffect(() => {
        setTimeout(() => {
            setHiddenFixa(false)
        }, 1500);
    }, [])

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

    const { t } = useTranslation();

  return (
    <>
        <header
            hidden={hiddenFixa}
            className={'fixed-navbar ' + (!props.isIntersecting ? 'show-fixed-navbar' : 'hide-fixed-navbar')}
        >
            <nav className={"fixed top-5 w-full navigation-fixed text-center "  + (!props.isIntersecting ? 'show-navigation-fixed' : 'hide-fixed-navbar') }>
                <ul className="hidden nav-breakpoint:block text-2xl">
                    <li 
                        className="inline fixed-nav-item p-4" 
                        onClick={() => props.refHome.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        { t('inicio') } <FontAwesomeIcon icon={faHome} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4" 
                        onClick={() => props.refSobre.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        { t('sobre') } <FontAwesomeIcon icon={faInfoCircle} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4" 
                        onClick={() => props.refExperiencia.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        { t('experiencia') } <FontAwesomeIcon icon={faLightbulb} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4"
                        onClick={() => props.refHabilidades.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        { t('habilidades_e_idiomas') } <FontAwesomeIcon icon={faAward} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4"
                        onClick={() => props.refFormacao.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        { t('formacao') } <FontAwesomeIcon icon={faGraduationCap} className="ml-2"/>
                    </li>
                </ul>
            </nav>
        </header>
        <header 
            className="nav-breakpoint:hidden block navigation-mobile fixed"
        >
            <nav className="p-12">
                <div className="text-3xl" >
                    <p>
                        <FontAwesomeIcon onClick={() => setDrawerOpen(true)} icon={faBars} className="shadow-icon"/>
                    </p>
                </div>
                <div className={"absolute text-2xl navigation-mobile-container " + (drawerOpen ? 'drawer-open' : closeDrawer ? 'drawer-close' : 'drawer')}>
                    <div className="switch inline-block">
                        <input 
                            value={enLang}
                            onChange={(e) => setEnLang(e.target.checked)}
                            id="langToggleNavFixa"
                            type="checkbox" 
                            className="check-toggle check-toggle-round-flat"
                        />
                        <label htmlFor="langToggleNavFixa"></label>
                        <span className="on">BR</span>
                        <span className="off">EN</span>
                    </div>
                    <ul>
                        <li 
                            className='text-3xl icon-navbar-mobile-open icon-navbar-mobile-close mb-6' 
                        >   
                            <p className="text-right pr-6 pl-6">
                                <FontAwesomeIcon onClick={() => doCloseDrawer(false)} icon={faX} className='shadow-icon'/>
                            </p>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refHome)}>
                            <span className={drawerOpen ? 'nav-mobile-item-animation-1' : ''}>
                                { t('inicio') } <FontAwesomeIcon icon={faHome} className="ml-2"/> 
                            </span>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refSobre)}>
                            <span className={drawerOpen ? 'nav-mobile-item-animation-2' : ''}>
                                { t('sobre') } <FontAwesomeIcon icon={faInfoCircle} className="ml-2"/>
                            </span>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refExperiencia)}>
                            <span className={drawerOpen ? 'nav-mobile-item-animation-3' : ''}>
                                { t('experiencia') } <FontAwesomeIcon icon={faLightbulb} className="ml-2"/>
                            </span>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refHabilidades)}>
                            <span className={drawerOpen ? 'nav-mobile-item-animation-4' : ''}>
                                { t('habilidades_e_idiomas') } <FontAwesomeIcon icon={faAward} className="ml-2"/>
                            </span>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refFormacao)}>
                            <span className={drawerOpen ? 'nav-mobile-item-animation-5' : ''}>
                                { t('formacao') } <FontAwesomeIcon icon={faGraduationCap} className="ml-2"/>
                            </span>
                        </li>
                    </ul>
                    <div className="mt-12 w-full pl-6 pt-4">
                        <RedesSociaisMobile />
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}
