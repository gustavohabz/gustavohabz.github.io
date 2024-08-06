import { faAngular, faCss3, faHtml5, faJava, faJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faGlobeAmericas, faLeaf, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Habilidades = () => {
  return (
    <div className="flex space-y-6 flex-col sm:space-y-0 sm:flex-row sm:space-x-6">
        <div 
            className='card rounded-lg pt-12 pl-12 pr-12 sm:pb-0 pb-12 sm:mb-0 mb-12 sm:w-1/3'
        >
            <h1 className="text-2xl text-center" >
                Idiomas <FontAwesomeIcon style={{color: '#002a5f'}} icon={faGlobeAmericas}/>
            </h1>
            <div className="mt-6 mb-6">
                <hr className="border-black"/>
            </div>
            <div className="pt-12">
                <p className="text-md text-center">
                    Inglês Intermediário Avançado
                </p>
            </div>
        </div>
        <div 
            className='card rounded-lg p-12 sm:w-2/3'
        >
            <h1 className="text-3xl text-center" >Linguagens e Frameworks <FontAwesomeIcon icon={faWrench} /> </h1>
            <div className="mt-6 mb-6">
                <hr className="border-black"/>
            </div>
            <div className="p-12 text-xl">
                <div className="flex flex-col sm:flex-row sm:text-center">
                    <div className="sm:w-1/3">
                        <FontAwesomeIcon className="text-html5" icon={faHtml5} /> HTML 5
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/3">
                        <FontAwesomeIcon className="text-css3" icon={faCss3} /> CSS 3
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/3">
                        <FontAwesomeIcon icon={faJs} /> JavaScript
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:mt-6">
                    <div className="mt-4 sm:mt-0 sm:w-1/6">
                        Serverless
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/6">
                        <FontAwesomeIcon style={{color: 'red'}} icon={faAngular} /> AngularJS
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/6">
                        <FontAwesomeIcon style={{color: 'green'}} icon={faVuejs} /> Vue.js
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/6">
                        <FontAwesomeIcon style={{color: 'cyan'}} icon={faReact} /> React
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/6">
                        Next.js
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/6">
                        Redux
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:text-center sm:mt-6">
                    <div className="mt-4 sm:mt-0 sm:w-1/4">
                        <FontAwesomeIcon className="text-java" icon={faJava} /> Java
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/4">
                        <FontAwesomeIcon style={{color: 'green'}} icon={faLeaf} /> Springboot
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/4">
                    Hibernate
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-1/4">
                        <FontAwesomeIcon style={{color: '#e34c00'}} icon={faDatabase} /> MySQL
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
