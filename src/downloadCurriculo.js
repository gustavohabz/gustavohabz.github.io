export const downloadCurriculo = async (lang) => {
    const fileName = (lang === 'br' ? 'curriculo_gustavo_habitzreiter.pdf' : 'cv_gustavo_habitzreiter.pdf')
    const fileLocation = '/files/'+(lang === 'br' ? 'curriculo.pdf' : 'resume.pdf' )
    try {
        const response = await fetch(fileLocation)
        const blob = await response.blob()

        if( 
            window.navigator && 
            window.navigator.msSaveOrOpenBlob 
        ) return window.navigator.msSaveOrOpenBlob(blob)

        const data = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = data;
        link.download = fileName;
        link.dispatchEvent(
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            })
        )
        setTimeout(() => {
            window.URL.revokeObjectURL(data);
            link.remove();
        }, 100)
    } catch(e) {
        console.log('Erro ao baixar currículo')
        console.log(e)
    }
}
