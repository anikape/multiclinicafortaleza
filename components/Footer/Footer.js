
import Image from 'next/image'
import './footer.css'

const Footer = () => {

  const socials =[
    {
      id:1,
      img:'/icons/FACE.svg',
      nome:"Logo do facebook",
      path:'',
    },
    {
      id:2,
      img:'/icons/INSTA.svg',
      nome:"Logo do instagram",
      path:'',
    },
    {
      id:3,
      img:'/icons/TELEFONE.svg',
      nome:"Imagem de um telefone",
      path:'',
    },
    {
      id:4,
      img:'/icons/WHATS.svg',
      nome:"Logo do whatsapp",
      path:'',
    }
  ]
  
  return (
    <>
    <section className="footer__container">
      <div>
        <Image className='logo__footer' src='/logoMaior.png' alt="Logo Multiclinica" width={472} height={107} />
      </div>

    <section className='footer__adress'>
      <div className="adress">
        <h2>Endereço</h2>
        <p>Rua Guaratinguetá, 60. Parangaba. 
        Fortaleza - Ceará - Brasil.
        Cep: 60710-180
        </p>
      </div>    

      <div className="contact">
        <h2>TELE ATENDIMENTO</h2>
        <p>85 3048.5850 - 85 3048.5802<br/>
           85 3048.5801 - 85 3048.5803
        </p>
      </div>   

      <div className="socials">
        <h2>Redes Sociais</h2>

        <div className='icons' >
          {socials.map(({img, path,nome,id}) =>(
            <>
            <ul key={id}>
            <li><a href={path}><img src={img} alt={nome} /></a></li>
            
            </ul>
            </>
          ))}
        </div>       
       
      </div>  
      </section>

      <section className='copyright'>
          <Image src='/icons/Line 1.svg' className="line" alt='imagem de uma linha horizontal' width={500} height={100} />
         <p>© 2022 MULTICLINICA FORTALEZA LTDA. CNPJ 01.373.946/0001-66. TODOS OS DIREITOS RESERVADOS.</p>
        </section>

    </section>
    </>
  )
}

export default Footer