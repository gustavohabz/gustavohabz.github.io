import { useEffect, useState } from "react"
import i18n from "../i18n"

export const Experiencias = () => {
    const [experiencias, setExperiencias] = useState([])
    
    useEffect(() => {
        let experiencias = []
        
        switch(i18n.language){
            case 'br':
                experiencias = 
                [
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
                                        'Desenvolvi scripts de web scrapping com python para coletar informações de imóveis em sites de empreendedoras e popular o banco de dados, tornando o trabalho menos manual possível.',
                                        'Desenvolvi o back-end de páginas novas e realizei manutenção em páginas antigas.'
                                    ]
                                }
                            ]
            break;
            case 'en':
                experiencias = 
                [
                                {
                                    titulo: 'Conexão NF-e', 
                                    cargo: 'Full Stack Developer', 
                                    local: 'Joinville, SC - Brazil',
                                    dataInicio: 'Jun 2019', 
                                    dataFim: 'Jul 2024',
                                    atribuicoes: [
                                        'I developed and maintained many pages for an invoice management system using the AngularJS framework, applying JavaScript, HTML and CSS knowledge. I built new invoice listing pages and landing pages to enhance client engagement. I performed maintenance on pages that had been experiencing bugs overtime, and implemented new functionalities on pages that were already established, but underwent changes in business rules. Additionaly, I created new special pages with unique layout and logic compared to the rest of the system, such as an auto-buying page that enabled clients to purchase the company’s plans without relying on the customer service team or contacting support.',
                                        'Developed screens in collaboration with backend using Java, Hibernate, and MySQL, creating scripts and backend code for listing screens, reports, and other specific screens such as CRUDs.',
                                        'Updated the back office project from Vue 2 to Vue 3 and upgraded the Quasar framework to the latest version.',
                                        ' Developed a back office system, built screens using Vue.js on the frontend and Java, MySQL, and Hibernate on the backend, created new listing screens, report generation, and forms with company information, company settings, and user information from ConexãoNF-e itself, assisting not only in internal company management but also in customer account management.',
                                        'Created and maintained pages of a static website with HTML, CSS, and some JS scripts, implementing new landing pages as per company demands, and applied layout changes or business rule changes applicable to the website.',
                                        '• Implemented functionalities with serverless in a third-party connection service, connections with RD Station, Slack bots, or services for capturing user information from the system.',
                                        'Maintained screens using React.js and Next.js frameworks'
                                    ]
                                },
                                {
                                    titulo: 'Imodi', 
                                    cargo: 'Full Stack Developer', 
                                    local: 'Joinville, SC - Brazil', 
                                    dataInicio: 'Oct 2018', 
                                    dataFim: 'May 2019',
                                    atribuicoes: [
                                        'I built screens for a real estate management system using PHP, HTML, and AJAX.',
                                        'Developed web scraping scripts with Python to gather property information from real estate websites and populate the database, minimizing manual work as much as possible.',
                                        'Developed backend for new pages and performed maintenance on old pages.'
                                    ]
                                }
                ]
            break;
        }

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
