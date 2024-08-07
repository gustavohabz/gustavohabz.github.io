import React from 'react'
import { useTranslation } from 'react-i18next';

export const Formacao = () => {
    const { t } = useTranslation();
  return (
    <>
        <div className="hidden sm:flex space-y-6 space-y-0 flex-row sm:space-x-6">
            <div 
                className='pt-12 pl-12 pr-12 sm:pb-0 pb-12 sm:mb-0 mb-12 sm:w-1/3'
            >
                <h1 className="text-center text-xl">
                    { t('formacao_data1') }
                </h1>
            </div>
            <div 
                className='card rounded-lg pt-12 pl-12 pr-12 pb-12 mb-0 mb-12 w-2/3'
            >
                <h1 className="text-xl">{ t('descomplica') }</h1>
                <div className="mt-6 mb-6">
                    <hr className="border-black"/>
                </div>
                <p className='text-lg'>{ t('descomplica_curso') }</p>
            </div>
        </div>
        <div className="hidden sm:flex pt-12 space-y-0 flex-row space-x-6">
            <div 
                className='card rounded-lg pt-12 pl-12 pr-12 sm:pb-12 pb-12 sm:mb-0 mb-12 sm:w-3/4'
            >
                <h1 className="text-xl">{ t('senai') }</h1>
                <div className="mt-6 mb-6">
                <hr className="border-black"/>
                </div>
                <p className='text-lg'>{ t('senai_curso') }</p>
            </div>
            <div 
                className='rounded-lg pt-12 pl-12 pr-12 sm:pb-0 pb-12 sm:mb-0 mb-12 sm:w-2/4'
            >
                <h1 className="text-center text-xl">
                    { t('formacao_data2') }
                </h1>
            </div>
        </div>
        <div className="sm:hidden flex flex-col">
            
            <div 
                className='rounded-lg mb-6'
            >
                <h1 className="text-center text-xl">
                    { t('formacao_data1') }
                </h1>
            </div>
            <div 
                className='card rounded-lg pt-12 pl-2 pr-2 pb-12 mb-12 w-full'
            >
                <h1 className="text-xl">{ t('descomplica') }</h1>
                <div className="mt-6 mb-6">
                    <hr className="border-black"/>
                </div>
                <p className='text-lg'>{ t('descomplica_curso') }</p>
            </div>
        </div>
        <div className="sm:hidden flex pt-12 flex-col">
            <div 
                className='rounded-lg mb-6'
            >
                <h1 className="text-center text-xl">
                    { t('formacao_data2') }
                </h1>
            </div>
            <div 
                className='card rounded-lg pt-12 pl-2 pr-2 pb-12 mb-12 w-full'
            >
                <h1 className="text-xl">{ t('senai') }</h1>
                <div className="mt-6 mb-6">
                    <hr className="border-black"/>
                </div>
                <p className='text-lg'>{ t('senai_curso') }</p>
            </div>
        </div>
    </>
  )
}
