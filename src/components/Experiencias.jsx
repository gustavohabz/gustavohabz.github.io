import { useEffect, useState } from "react"

export const Experiencias = () => {
    const [experiencias, setExperiencias] = useState([])

    useEffect(() => {
        setExperiencias([
            {
                titulo: 'Conexão NF-e', 
                cargo: 'Desenvolvedor Full-Stack', 
                local: 'Joinville, SC', 
                dataInicio: 'Jun 2019', 
                dataFim: 'Jul 2024',
                atribuicoes: [
                    'Desenvolvi e realizei manutenção de diversas telas em um sistema de gerenciamento de documentos fiscais com o framework AngularJS, aplicando conhecimentos de JS, HTML e CSS. Construí novas telas de listagens de documentos fiscais e telas de geração de relatórios de documentos fiscais, criei diversas landing pages para auxiliar no engajamento dos clientes, realizei manutenção em páginas que apresentavam bugs com o passar do tempo e implementei novas funcionalidades em páginas já consolidadas que passaram por mudanças na regra de negócio, também foram criei algumas páginas especiais que saiam um pouco do padrão do resto do sistema, como um sistema de compra automatizada onde o cliente faria o processo de aquisição de um plano quase sem precisar realizar contato com o suporte/time de vendas.',
                    'Desenvolvi telas em conjunto com back-end utilizando Java, hibernate e MySQL, criando scripts e desenvolvendo código de back-end para telas de listagens, relatórios e outras telas específicas também como CRUDs.',
                    'Realizei a atualização do projeto de backoffice do vue 2 para o vue 3 e atualizando o framework quasar para a versão mais moderna.',
                    'Desenvolvi um sistema de backoffice, construí telas utilizando vue.js no front-end e Java, MySQL e hibernate no back-end, criei novas telas de listagens, geração de relatórios e formulários com informações de empresas, configurações de empresas e informações de usuários da própria ConexãoNF-e, auxiliando não só no gerenciamento interno da empresa, mas também no gerenciamento de contas de clientes.',
                    'Criei e realizei manutenção das páginas de um website estático com HTML, CSS e alguns scripts JS, implementando novas landing pages de acordo com as demandas da empresa e apliquei mudanças de layout ou mudanças de regras de negócio que se aplicavam ao website.',
                    'Realizei implementações com o serverless em um serviço de conexão com terceiros, conexões com RD Station, bots do slack ou serviços de captura de informações de usuários do sistema.',
                    'Realizei manutenção de telas utilizando dos frameworks React.js e Next.js.'
                ]
            },
            {
                titulo: 'Imodi', 
                cargo: 'Desenvolvedor Full-Stack', 
                local: 'Joinville, SC', 
                dataInicio: 'Out 2018', 
                dataFim: 'Mai 2019',
                atribuicoes: [
                    'Construí telas para um sistema de gerenciamento de imóveis utilizando de PHP, HTML e ajax.',
                    'Desenvolvei scripts de web scrapping com python para coletar informações de imóveis em sites de empreendedoras e popular o banco de dados, tornando o trabalho menos manual possível.',
                    'Desenvolvi o back-end de páginas novas e realizei manutenção em páginas antigas.'
                ]
            }
        ])
    }, [])

  return (
    <div className="flex flex-col space-y-12">
        {experiencias.map((experiencia, index) => (
            <div 
                key={index}
                className='card rounded-lg pt-12 pl-6 pr-6 pb-12 sm:p-12'
            >
                <div className="float-left">
                    <h3 className="text-3xl mb-2">{experiencia.titulo}</h3>
                    <small>{experiencia.cargo}</small>
                </div>
                <div className='float-right'>
                    <h3 className="text-lg">{experiencia.local}</h3>
                    <h3 className="text-1xl">{experiencia.dataInicio} - {experiencia.dataFim}</h3>
                </div>
                <div className="float-left mt-4">
                    <ul className="list-disc text-sm">
                        {experiencia.atribuicoes.map((atribuicao, indexAtribuicao) => (
                            <li key={indexAtribuicao} className="mb-2">
                                <p className="indent-2 text-justify hyphens-auto">{atribuicao}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
    </div>
  )
}
