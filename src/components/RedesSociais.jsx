import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const RedesSociais = () => {
  return (
    <div className="flex flex-row sm:space-x-64 space-x-32">
        <div className="basis-1/2">
            <h1 className=" text-6xl sm:text-5xl text-right">
                <a
                    href="https://github.com/gustavohabz"
                    target="_blank"
                    className="github"
                >
                    <FontAwesomeIcon icon={faGithub} className="rede-social"/>
                </a>
            </h1>
        </div>
        <div className="basis-1/2">
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
    </div>
  )
}
