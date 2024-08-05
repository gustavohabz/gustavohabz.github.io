import { faAngular, faCss3, faHtml5, faJava, faJs, faPhp, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Sobre = () => {
    const idade = Math.abs(new Date(Date.now() - new Date('07-07-1999')).getUTCFullYear() - 1970)
    const anosDeTrabalho = Math.abs(new Date(Date.now() - new Date('01-10-2018')).getUTCFullYear() - 1970)
    const linkedinFoto = 'https://media.licdn.com/dms/image/D4D03AQHOPVxaMmr6JA/profile-displayphoto-shrink_800_800/0/1720291928424?e=1728518400&v=beta&t=xHgKDPg_qAdRPX3igp42Sg4XEi-Wnu8H6L8C-vP98fQ'
  return (
    <div 
        className="flex space-y-6 flex-col sm:space-y-0 sm:flex-row sm:space-x-6 z-0"
    >
        <div className="ml-auto mr-auto text-center">
            <img 
                className="rounded-full object-contain object-center" 
                width="300" 
                src={linkedinFoto}
            />
        </div>
        <div className="card rounded-lg p-12">
            <h3 className="text-5xl mb-6">Desenvolvedor Web Full-Stack</h3>
            <p className="indent-2 text-justify hyphens-auto">Tenho {idade} anos, estudo programação
                 há {new Date().getFullYear() - 2015} anos, atualmente curso faculdade de análise e 
                 desenvolvimento de sistemas, gosto de estudar ferramentas de desenvolvimento web 
                 como frameworks, bibliotecas e linguagens de programação, continuo 
                 estudando a área constantemente e estou disposto sempre a aprender mais.</p>
            <br />
            <p className="indent-2 text-justify hyphens-auto">
                Minha área de estudos e interesses está focada em desenvolvimento web, 
                tenho cerca de {anosDeTrabalho} anos de experiência no mercado de trabalho e
                durante muitos anos da minha jornada no mercado de trabalho trabalhei 
                construindo e realizando manutenção em diversas telas e criando diversas 
                telas.
            </p>
            <br />
            <hr />
            <br />
            <h3 className="text-5xl mb-2">Stack</h3>
            <br />
            <h2 className="text-5xl w-full">
                <div className="flex flex-row">
                    <div 
                        className="basis-1/3 text-center text-html5"
                    > 
                        <FontAwesomeIcon icon={faHtml5} /> 
                    </div>
                    <div
                        className="basis-1/3 text-center text-css3"
                    > 
                        <FontAwesomeIcon icon={faCss3} /> 
                    </div>
                    <div 
                        style={{color: 'black'}} 
                        className="basis-1/3 text-center"
                    >
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                </div>
            </h2>
            <br />
            <h2 className="text-5xl w-full">
                <div className="flex flex-row">
                    <div 
                        style={{color: 'red'}}
                        className="basis-1/3 text-left"
                    >
                        <FontAwesomeIcon icon={faAngular} /> 
                    </div>
                    <div 
                        style={{color: 'cyan'}} 
                        className="basis-1/3 text-center"
                    >
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div style={{color: 'green'}} 
                        className="basis-1/3 text-right"
                    > 
                        <FontAwesomeIcon icon={faVuejs} />
                    </div>
                </div>
            </h2>
            <br />
            <h2 className="text-5xl w-full">
                <div className="flex flex-row">
                    <div 
                        className="basis-1/2 text-center text-php"
                    > 
                        <FontAwesomeIcon icon={faPhp} className='drop-shadow-2xl'/>
                    </div>
                    <div 
                        className="basis-1/2 text-center text-java"
                    > 
                        <FontAwesomeIcon icon={faJava} className='drop-shadow-2xl' />
                    </div>
                </div>
            </h2>
        </div>
    </div>
  )
}
