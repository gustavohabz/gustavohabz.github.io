import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faAward, faBars, faGraduationCap, faHome, faInfoCircle, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { RedesSociais } from './RedesSociais'

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

  return (
    <>
        <header
            hidden={hiddenFixa}
            className={'fixed-navbar ' + (!props.isIntersecting ? 'show-fixed-navbar' : 'hide-fixed-navbar')}
        >
            <nav className={"fixed top-5 w-full navigation-fixed text-center "  + (!props.isIntersecting ? 'show-navigation-fixed' : 'hide-fixed-navbar') }>
                <ul className="hidden lg:block text-2xl">
                    <li 
                        className="inline fixed-nav-item p-4" 
                        onClick={() => props.refHome.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        Início <FontAwesomeIcon icon={faHome} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4" 
                        onClick={() => props.refSobre.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        Sobre <FontAwesomeIcon icon={faInfoCircle} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4" 
                        onClick={() => props.refExperiencia.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        Experiência <FontAwesomeIcon icon={faLightbulb} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4"
                        onClick={() => props.refHabilidades.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        Habilidades e Idiomas <FontAwesomeIcon icon={faAward} className="ml-2"/>
                    </li>
                    <li 
                        className="inline fixed-nav-item p-4"
                        onClick={() => props.refFormacao.current.scrollIntoView({behavior: 'smooth'})}
                    >
                        Formação <FontAwesomeIcon icon={faGraduationCap} className="ml-2"/>
                    </li>
                </ul>
            </nav>
        </header>
        <header 
            className="sm:hidden navigation-mobile fixed"
        >
            <nav className="p-12">
                <div className="text-3xl" >
                    <p>
                        <FontAwesomeIcon onClick={() => setDrawerOpen(true)} icon={faBars} className="shadow-icon"/>
                    </p>
                </div>
                <div className={"absolute text-2xl navigation-mobile-container " + (drawerOpen ? 'drawer-open' : closeDrawer ? 'drawer-close' : 'drawer')}>
                    <ul>
                        <li 
                            className='text-3xl icon-navbar-mobile-open icon-navbar-mobile-close' 
                        >
                            <p className="text-right pr-6 pl-6">
                                <FontAwesomeIcon onClick={() => doCloseDrawer(false)} icon={faX}/>
                            </p>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refHome)}>
                            Início <FontAwesomeIcon icon={faHome} className="ml-2"/>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refSobre)}>
                            Sobre <FontAwesomeIcon icon={faInfoCircle} className="ml-2"/>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refExperiencia)}>
                            Experiência <FontAwesomeIcon icon={faLightbulb} className="ml-2"/>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refHabilidades)}>
                            Habilidades e Idiomas <FontAwesomeIcon icon={faAward} className="ml-2"/>
                        </li>
                        <li className="nav-item p-4" onClick={() => scrollAndCloseDrawer(props.refFormacao)}>
                            Formação <FontAwesomeIcon icon={faGraduationCap} className="ml-2"/>
                        </li>
                    </ul>
                    <div className="absolute bottom-32 w-full pl-6">
                        <div className="flex flex-row space-x-12">
                            <RedesSociais />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}
