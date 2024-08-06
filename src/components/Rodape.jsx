import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Rodape = () => {
  return (
    <footer className="mt-24 w-full shadow-3xl shadow-inner rodape">
        <p 
                className="pt-6 pb-6 text-center"
            >
            <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} &nbsp;
            <a
                href="https://github.com/gustavohabz/gustavohabz.github.io"
                target="_blank"
                className="hover:underline"
            >
                Gustavo Habitzreiter
            </a>
        </p>
    </footer>
  )
}
