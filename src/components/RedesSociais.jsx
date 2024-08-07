import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { downloadCurriculo } from '../downloadCurriculo'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export const RedesSociais = () => {

    
  const { t, i18n } = useTranslation()

  return (
    <div className="flex flex-row sm:space-x-64 space-x-8 text-center">
        <div className="basis-1/3">
            <h1 className=" text-6xl sm:text-5xl">
                <a
                    href="https://github.com/gustavohabz"
                    target="_blank"
                    className="github"
                >
                    <FontAwesomeIcon icon={faGithub} className="rede-social"/>
                </a>
            </h1>
        </div>
        <div className="basis-1/3">
            <h1 className="text-6xl sm:text-5xl">
                <a
                    href="https://www.linkedin.com/in/gustavo-habitzreiter-b0b316135/"
                    target="_blank"
                    className="linkedin"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="rede-social"/>
                </a>
            </h1>
        </div>
        {/* <div className="basis-1/4">
            <h1 className="text-6xl sm:text-5xl">
                <a
                    href="https://www.linkedin.com/in/gustavo-habitzreiter-b0b316135/"
                    target="_blank"
                    className="linkedin"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </h1>
        </div> */}
        <div className="basis-1/3">
            <h1 className="text-6xl sm:text-5xl">
                <a
                    target="_blank"
                    className="linkedin"
                    onClick={() => downloadCurriculo(i18n.language)}
                >
                    <FontAwesomeIcon icon={faFileLines} title="Abrir Currículo" className="rede-social" />
                </a>
            </h1>
        </div>
    </div>
  )
}
