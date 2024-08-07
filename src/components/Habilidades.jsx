import { faGlobeAmericas, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Linguagens } from './Linguagens'

export const Habilidades = () => {
    const { t } = useTranslation();
  return (
    <div className="flex space-y-6 flex-col sm:space-y-0 sm:flex-row sm:space-x-6">
        <div 
            className='card rounded-lg pt-12 pl-12 pr-12 sm:pb-0 pb-12 sm:mb-0 mb-12 sm:w-2/6'
        >
            <h1 className="text-2xl text-center" >
                { t('idiomas') } <FontAwesomeIcon style={{color: '#002a5f'}} icon={faGlobeAmericas}/>
            </h1>
            <div className="mt-6 mb-6">
                <hr className="border-black"/>
            </div>
            <div className="pt-12">
                <p className="text-md text-center">
                    { t('ingles_intermediario_avancado') }
                </p>
                { t('portugues') && ( <p className="text-md mt-6 text-center" >{ t('portugues') }</p> )}
            </div>
        </div>
        <div 
            className='card rounded-lg p-12 sm:w-4/6'
        >
            <h1 className="text-3xl text-center" >{ t('linguagens_e_frameworks') } <FontAwesomeIcon icon={faWrench} /> </h1>
            <div className="mt-6 mb-6">
                <hr className="border-black"/>
            </div>
            <Linguagens />
        </div>
    </div>
  )
}
