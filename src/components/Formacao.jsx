import React from 'react'
import { useTranslation } from 'react-i18next';

export const Formacao = () => {
    const { t } = useTranslation();
  return (
    <>
        <div className="timeline relative" style={{zIndex: '-1'}}>
            <div className="timeline-container left">
                <div className="content">
                    <h2 className="text-3xl ">{ t('descomplica') }</h2>
                    <h2 className="text-xl mb-6">{ t('formacao_data1') }</h2>
                    <hr className="border-black"/>
                    <h2 className="text-xl mb-4">{ t('descomplica_curso') }</h2>
                </div>
            </div>
            <div className="timeline-container right">
                <div className="content">
                    <h2 className="text-3xl">{ t('senai') }</h2>
                    <h2 className="text-xl mb-6">{ t('formacao_data2') }</h2>
                    <hr className="border-black"/>
                    <h2 className="text-xl">{ t('senai_curso') }</h2>
                </div>
            </div>
        </div>
    </>
  )
}
