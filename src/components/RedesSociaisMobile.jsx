import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { downloadCurriculo } from '../downloadCurriculo'

export const RedesSociaisMobile = () => {
  return (
    <div className="flex flex-row space-x-2">
        <div className="basis-1/3">
            <h1 className=" text-7xl ">
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
            <h1 className="text-7xl">
                <a
                    href="https://www.linkedin.com/in/gustavo-habitzreiter-b0b316135/"
                    target="_blank"
                    className="linkedin"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="rede-social"/>
                </a>
            </h1>
        </div>
        <div className="basis-1/3">
            <h1 className="text-7xl">
                <a
                    onClick={downloadCurriculo}
                    target="_blank"
                    className="linkedin"
                >
                    <FontAwesomeIcon icon={faFileLines} title="Abrir Currículo" className="rede-social" />
                </a>
            </h1>
        </div>
    </div>
  )
}
