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
                <hr/>
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
                <hr/>
            </div>
            <div className="p-12">
                <p className="text-xl text-center">
                    <FontAwesomeIcon className="text-html5" icon={faHtml5} /> HTML 5 &nbsp; | &nbsp;
                    <FontAwesomeIcon className="text-css3" icon={faCss3} /> CSS 3 &nbsp; | &nbsp;
                    <FontAwesomeIcon icon={faJs} /> JavaScript &nbsp; | &nbsp;
                    Serverless &nbsp; | &nbsp;
                    <FontAwesomeIcon style={{color: 'red'}} icon={faAngular} /> AngularJS &nbsp; | &nbsp;
                    <FontAwesomeIcon style={{color: 'green'}} icon={faVuejs} /> Vue.js &nbsp; | &nbsp;
                    <FontAwesomeIcon style={{color: 'cyan'}} icon={faReact} /> React &nbsp; | &nbsp;
                    Next.js &nbsp; | &nbsp;
                    Redux &nbsp; | &nbsp;
                    <FontAwesomeIcon className="text-java" icon={faJava} /> Java &nbsp; | &nbsp;
                    <FontAwesomeIcon style={{color: 'green'}} icon={faLeaf} /> Springboot &nbsp; | &nbsp;
                    Hibernate &nbsp; | &nbsp;
                    <FontAwesomeIcon style={{color: '#e34c00'}} icon={faDatabase} /> MySQL
                </p>
            </div>
        </div>
    </div>
  )
}
