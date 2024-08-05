import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faAward, faBars, faGraduationCap, faHome, faInfoCircle, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'

export const Navbar = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerCloseClass, setDrawerCloseClass] = useState('')
    const [drawerOpenClass, setDrawerOpenClass] = useState('')
    const [closeDrawer, setCloseDrawer] = useState(false)

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
        if(!drawerOpen){
            setDrawerOpenClass('icon-navbar-mobile-open')
            setDrawerCloseClass('icon-navbar-mobile-close-hide')
        }else{
            props.setApplyBlur(true)
            setDrawerOpenClass('icon-navbar-mobile-bar-hide')
            setDrawerCloseClass('icon-navbar-mobile-close')
            document.body.style.overflow = 'hidden'
        }
    }, [drawerOpen])

  return (
    <>
        <header ref={props.refHeader} className=" navigation mt-5 text-center navigation-desktop">
            <nav className="hidden lg:block">
                <ul className="text-2xl nav-animations-startup">
                    <li className="inline nav-item p-4" onClick={() => props.refHome.current.scrollIntoView({behavior: 'smooth'})}>
                        Início <FontAwesomeIcon icon={faHome} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refSobre.current.scrollIntoView({behavior: 'smooth'})}>
                        Sobre <FontAwesomeIcon icon={faInfoCircle} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refExperiencia.current.scrollIntoView({behavior: 'smooth'})}>
                        Experiência <FontAwesomeIcon icon={faLightbulb} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refHabilidades.current.scrollIntoView({behavior: 'smooth'})}>
                        Habilidades e Idiomas <FontAwesomeIcon icon={faAward} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refFormacao.current.scrollIntoView({behavior: 'smooth'})}>
                        Formação <FontAwesomeIcon icon={faGraduationCap} className="ml-2"/>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
