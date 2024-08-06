import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faAward, faGraduationCap, faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next';

export const Navbar = (props) => {
    const { t } = useTranslation();
  return (
    <>
        <header ref={props.refHeader} className=" navigation mt-5 text-center navigation-desktop">
            <nav className="hidden nav-breakpoint:block">
                <ul className="text-2xl nav-animations-startup">
                    <li className="inline nav-item p-4" onClick={() => props.refHome.current.scrollIntoView({behavior: 'smooth'})}>
                        { t('inicio') } <FontAwesomeIcon icon={faHome} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refSobre.current.scrollIntoView({behavior: 'smooth'})}>
                        { t('sobre') } <FontAwesomeIcon icon={faInfoCircle} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refExperiencia.current.scrollIntoView({behavior: 'smooth'})}>
                        { t('experiencia') } <FontAwesomeIcon icon={faLightbulb} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refHabilidades.current.scrollIntoView({behavior: 'smooth'})}>
                        { t('habilidades_e_idiomas') } <FontAwesomeIcon icon={faAward} className="ml-2"/>
                    </li>
                    <li className="inline nav-item p-4" onClick={() => props.refFormacao.current.scrollIntoView({behavior: 'smooth'})}>
                        { t('formacao') } <FontAwesomeIcon icon={faGraduationCap} className="ml-2"/>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}
