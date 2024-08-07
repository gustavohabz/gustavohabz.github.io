import { RedesSociais } from './components/RedesSociais'
import { Header } from './components/Header'
import { Experiencias } from './components/Experiencias'
import { LinhaSeparadora } from './components/LinhaSeparadora'
import { useEffect, useRef, useState } from 'react'
import { Sobre } from './components/Sobre'
import { Navbar } from './components/Navbar'
import { NavbarFixa } from './components/NavbarFixa'
import { Habilidades } from './components/Habilidades'
import { Formacao } from './components/Formacao'
import { Rodape } from './components/Rodape'
import { useTranslation } from 'react-i18next'

function App() {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [applyBlur, setApplyBlur] = useState(false);

    const refHeader = useRef(null)
    const refHabilidades = useRef(null);
    const refExperiencia = useRef(null);
    const refSobre = useRef(null);
    const refHome = useRef(null);
    const refFormacao = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            }
        );
        observer.observe(refHeader.current);
        return () => observer.disconnect();
    }, [])
    
    const { t } = useTranslation();

    return (
        <>
            <Navbar 
                refHome={refHome}
                refSobre={refSobre}
                refExperiencia={refExperiencia}
                refHabilidades={refHabilidades}
                refFormacao={refFormacao}
            />
            <NavbarFixa
                refHome={refHome}
                refSobre={refSobre}
                refExperiencia={refExperiencia}
                refHabilidades={refHabilidades}
                refFormacao={refFormacao}
                isIntersecting={isIntersecting}
                setApplyBlur={setApplyBlur}
            />
            <main ref={refHome}>
                <div className={"container mx-auto " + (applyBlur ? 'blur-content' : '')}>
                    <section ref={refHeader}>
                        <Header />
                        <RedesSociais />
                    </section>
                    
                    <LinhaSeparadora />
                    
                    <section ref={refSobre}>
                        <h2 className="text-3xl text-center mb-32">{ t('sobre_mim') }</h2>
                        <Sobre />
                    </section>

                    <LinhaSeparadora />

                    <section ref={refExperiencia}>
                        <h2 className="text-3xl text-center mb-32">{ t('experiencia') }</h2>
                        <Experiencias />
                    </section>

                    <LinhaSeparadora />

                    <section ref={refHabilidades}>
                        <h2 className="text-3xl text-center mb-32">{ t('habilidades_e_idiomas') }</h2>
                        <Habilidades />
                    </section>

                    <LinhaSeparadora />

                    <section ref={refFormacao}>
                        <h2 className="text-3xl text-center mb-32">{ t('formacao') }</h2>
                        <Formacao />
                    </section>
                </div>
            </main>
            <Rodape />
        </>
    )
}

export default App
