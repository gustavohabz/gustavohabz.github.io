import { useEffect, useState } from "react"
import i18n from "../i18n"
import { useTranslation } from "react-i18next"

export const Experiencias = () => {
    const [experiencias, setExperiencias] = useState([])
    
    const { t } = useTranslation();

    useEffect(() => {
        let experiencias = [
            {
                titulo: t('experiencia_1_titulo'), 
                cargo: t('experiencia_1_cargo'), 
                local: t('experiencia_1_local'),
                dataInicio: t('experiencia_1_dataInicio'), 
                dataFim: t('experiencia_1_dataFim'),
                atribuicoes: [
                    t('experiencia_1_atribuicao1'),
                    t('experiencia_1_atribuicao2'),
                    t('experiencia_1_atribuicao3'),
                    t('experiencia_1_atribuicao4'),
                    t('experiencia_1_atribuicao5'),
                    t('experiencia_1_atribuicao6'),
                    t('experiencia_1_atribuicao7'),
                ]
            },
            {
                titulo: t('experiencia_2_titulo'), 
                cargo: t('experiencia_2_cargo'), 
                local: t('experiencia_2_local'),
                dataInicio: t('experiencia_2_dataInicio'), 
                dataFim: t('experiencia_2_dataFim'),
                atribuicoes: [
                    t('experiencia_2_atribuicao1'),
                    t('experiencia_2_atribuicao2'),
                    t('experiencia_2_atribuicao3'),
                ]
            }
        ]

        setExperiencias(experiencias)
    }, [i18n.language])

  return (
    <div className="timeline relative" style={{zIndex: '-1'}}>
        {experiencias.map((experiencia, index) => (
            <div 
                className={"timeline-container "+(index % 2 ? 'right' : 'left')}
                key={index}>
                <div className="content">
                    <h2 className="text-4xl">{experiencia.titulo}</h2>
                    <h2 className="text-2xl mb-6">{experiencia.dataInicio} - {experiencia.dataFim}</h2>
                    <h2 className="text-xl mb-4">{experiencia.cargo}</h2>
                    <hr className="border-black"/>
                    <ul className="list-disc text-justify hyphens-auto text-sm p-4">
                        {experiencia.atribuicoes.map((atribuicao, indexAtribuicao) => (
                            <li key={indexAtribuicao}>{atribuicao}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
  )
}
