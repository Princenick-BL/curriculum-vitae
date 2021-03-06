import React,{div, useContext} from 'react'
import '../css/Acceuil.css'
import MaPhoto from '../Media/MaPhoto.jpeg'
import {ThemeContext} from '../Context/ThemeContext'

export default function Acceuil() {

     //Recuperer le thème depuis context
     const  {theme} = useContext(ThemeContext)

    return (
        <div className={theme ? "Acceuil colorPrimaryDark flexV" : "Acceuil flexV" }>
            
            <div className={theme ? "UsrImgContainer  colorSecondaryDark center" : "UsrImgContainer center" }>
                <img className="UsrImg" src={MaPhoto} alt="logo"></img>
            </div>

            <div className="Nom">BALLO Prince Nick</div>
            <div className="Age">20 ans</div>
            <div className="Formation">Formation initiale Génie logiciel et Data Sciences</div>
            
            <div className="UserInfo center">
                
                <div className="Infos">
                    
                    <div className="Email"></div>
                    
                    <div className="info">
                        <div className="Titre ">Email</div>
                        <div className="ForTitre">princenickballo@gmail.com</div>
                    </div>
                </div>
                <div className="Infos">
                    
                    <div className="LinkedIn"></div> 
                    <div className="info">
                        <div className="Titre ">LinkedIn</div>
                        <div className="ForTitre"><a href="https://www.linkedin.com/in/prince-nick-ballo/">Redirection vers LinkedIn</a></div>
                    </div>
                </div>
                <div className="Infos">
                    
                    <div className="GitHub"></div>
                    <div className="info">
                        <div className="Titre ">GitHub</div>
                        <div className="ForTitre"><a href="https://github.com/Princenick-BL">Redirection vers GitHub</a></div>
                    </div>
                </div>
                <div className="Infos">
                    
                    <div className="Adress"></div>
                    <div className="info">
                        <div className="Titre ">Adresse</div>
                        <div className="ForTitre">100 rue Diderot 62100 Calais</div>
                    </div>
                </div>
                <div className="Infos">
                    
                    <div className="Tel"></div>
                    <div className="info">
                        <div className="Titre ">Tel</div>
                        <div className="ForTitre">07 54 50 96 49</div>
                    </div>
                </div>
        
            </div>
        </div>
    )
}
