import { faAngular, faCss3, faHtml5, faJava, faJs, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Linguagens = () => {
  return (
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
        <div className="flex flex-col sm:flex-row sm:mt-6 sm:text-center">
            <div className="mt-4 sm:mt-0 sm:w-1/3">
                Serverless
            </div>
            <div className="mt-4 sm:mt-0 sm:w-1/3">
                <FontAwesomeIcon style={{color: 'red'}} icon={faAngular} /> AngularJS
            </div>
            <div className="mt-4 sm:mt-0 sm:w-1/3">
                <FontAwesomeIcon style={{color: 'green'}} icon={faVuejs} /> Vue.js
            </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:mt-6 sm:text-center">
            <div className="mt-4 sm:mt-0 sm:w-1/3">
                <FontAwesomeIcon style={{color: 'cyan'}} icon={faReact} /> React
            </div>
            <div className="mt-4 sm:mt-0 sm:w-1/3">
                Next.js
            </div>
            <div className="mt-4 sm:mt-0 sm:w-1/3">
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
  )
}
