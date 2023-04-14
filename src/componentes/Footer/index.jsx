import "./Footer.css"
const Footer = () =>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
    <div className="redes">
    <a href='https://www.facebook.com/farid.arturo.1/'> 
        <img src="/img/facebook.png" alt="Facebook"/>
    </a>
    <a href='https://twitter.com/farid_arturo'> 
        <img src="/img/twitter.png" alt="twitter" />
    </a>
    <a href='https://www.instagram.com/farid_arturo/'> 
        <img src="/img/instagram.png" alt="instagram" />
    </a>
    </div>
    <img src='/img/Logo.png' alt='org' /> 
    <strong>Desarrollado por Angel Arturo</strong>
</footer>
}

export default Footer