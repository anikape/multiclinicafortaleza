import './information.css'
import Card from '../Cards/Cards'
import Image from 'next/image'


const Informations = () => {
  return (
    <>
    <section className='home__container'>
     
        <Image className='logo' src="/logoMaior2.png" alt="Logo da Multiclinica" width={407} height={106} />
        <div className='text'>

        <p>Bem-vindo à nossa clínica, onde cuidar da sua saúde é a nossa principal prioridade. Nossa equipe de profissionais altamente qualificados e dedicados está pronta para oferecer uma ampla gama de serviços médicos e exames de diagnóstico para atender às suas necessidades.</p>
        </div>
    </section>

    <section className='cards'>
    <Card />
    </section>
    </>
  )
}

export default Informations