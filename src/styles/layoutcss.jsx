import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
    html{
      scroll-behavior: smooth;
      overflow-x:hidden;
    /* -webkit-tap-highlight-color: transparent; */
    }
    *{
        font-family:"aller";
        box-sizing:border-box;
    }
    body{
      overflow-x:hidden;
      background-color:#E6E6E6;
    }
    @media (min-width: 1020px) {
    .SRLElementWrapper img{
     
        width:70% !important;
        object-fit:contain;
      
    }
  }
    h1,h2,h3,h4,h5,h6{
    font-family: "neue";
    }
    label,
    input,
    textarea,
    select {
      display: block;
      margin-bottom: 0.5rem;
      width:100%;
    }
    input,select{
        padding:.5rem 0;
    }
    label{
        font-weight:bold;
    }
    input,
    textarea,
    select {
      border: 1px solid ${({ theme }) => theme.colors.azul};
      border-radius: 1.5rem;
      padding: .5rem 1rem;
    }
    .container {
        max-width:1440px;
        margin:0 auto;
        padding:0 1rem;
    }
    .page{
        margin-top:10vh; 
    }
    .card{
      padding-top:2rem ;
      padding-bottom:2rem ;
    }
    .wrapperPolitica{
      max-width: 55rem;
      margin-bottom: 2rem;
    }
    .buttons{  
        text-align:right;
      .enviar{
          margin-right:1rem;
      }    
      .whatsapp{
        color: ${({ theme }) => theme.colors.azul};
        border: 1px solid ${({ theme }) => theme.colors.azul};
        border-radius: 1.5rem;
        padding: 0.5rem 2rem;
        text-transform: uppercase;
        font-weight: bold;
        background-color: ${({ theme }) => theme.colors.blanco};
        :hover{
          background-color: ${({ theme }) => theme.colors.azul};
          color:${({ theme }) => theme.colors.gris};
          transition:.3s;
        }
      }
    }
    .textoWrapper{
      max-width:45rem;
      margin:0 auto;
    }
    a{
      text-decoration:none;
    }
    ul{
      padding:0;
    }
    /* modal para los videos */
    .modal{
      position: fixed;
      top:0;
      bottom: 0;
      z-index:99999;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000000a6;
      width: 100%;
      &__close{
        display: none;
      }
      .videoContainer{
        position:relative;
        width:50%;
      }
      video{
        width:100%;
      }

      .close{
        position: absolute;
        top: -15px;
        right:-15px;
        background-color:${({ theme }) => theme.colors.blanco};
        width: 30px;
        height: 30px;
        font-weight:bold; 
        cursor:pointer;
        display: flex;
        align-items: center;
        justify-content:center ;
        color:${({ theme }) => theme.colors.azul};
        border-radius: 50%;
        transition: .3s;
        :hover{
          background-color:${({ theme }) => theme.colors.azul};
          color:${({ theme }) => theme.colors.blanco};

        }
      }
    }
   /* aqui para arrreglar lo del heaader que es 10vh 
   *aqui vamos a cambiar las dimensiones de la fullpage
   */
   /* AQUI HACEMOS UNA PEQUEÑA MODIFICACION POR CADA UNA PARA QUE ENCAJE EN EL BLOQUE */
   .fp-viewing-1 #fullpage
   {
    transform: translate3d(0px, -90vh, 0px) !important;
   }
   .fp-viewing-2 #fullpage
   {
    transform: translate3d(0px, -180vh, 0px) !important;
   }
   .fp-viewing-3 #fullpage
   {
    transform: translate3d(0px, -270vh, 0px) !important;
   }
   .fp-viewing-4 #fullpage
   {
    transform: translate3d(0px, -360vh, 0px) !important;
   }
   .fp-viewing-5 #fullpage
   {
    transform: translate3d(0px, -450vh, 0px) !important;
   }
   .fp-viewing-6 #fullpage
   {
    transform: translate3d(0px, -540vh, 0px) !important;
   }
   .fp-viewing-7 #fullpage
   {
    transform: translate3d(0px, -630vh, 0px) !important;
   }
   .fp-viewing-8 #fullpage
   {
    transform: translate3d(0px, -720vh, 0px) !important;
   }
   .fp-viewing-9 #fullpage
   {
    transform: translate3d(0px, calc(-90% + 3vh), 0px) !important;
   }
   #fullpage .section{
     height:90vh !important;
     /* PARA QUE EL FOOTER MANTENGA SU HEIGHT */
     :last-child{
     height:auto !important;
     .fp-tableCell{
     height:auto !important;
     }
     }
     .fp-tableCell{
     height:90vh !important; 
     } 
    }
    /*Errores de Formularios*/
    .errorForm{
      color:red;
    }
  
@media (max-width: 1440px){
  .container{
    padding:0 5rem;
  }
}
@media (max-width: 640px){
  .container{
    padding:0 1rem;
  }
  .video{
    .azul{
      width: 100%;
      display:block;
      text-align: center;
    }
  }
  .modal .videoContainer{
    width:75%;
  }
}
@media (max-width: 500px){
  .buttons{
  text-align:center;
  display:flex;
  flex-direction:column;
  .enviar{
    margin-right:0;
    margin-bottom:.5rem;
  }
  }
}
`
export const Theme = {
  colors: {
    azul: "#002856",
    amarillo: "#FFB600",
    gris: "#E6E6E6",
    negro: "#000000",
    verde: "#006b45",
    plomo: "#707070",
    grisform: "#CBD1DC",
    blanco: "white",
    verdeWhatsap: "#25D366",
  },
  fontsize: {
    xssmall: ".8rem",
    small: "1.2rem",
    medium: "clamp(1rem,2.5vw,1.5rem)",
    large: "clamp(1.5rem,3vw,2rem)",
    extralarge: "clamp(2.5rem,4vw,3.5rem)",
    xlextralarge: "clamp(3rem,5vw,4.5rem)",
  },
  size: {
    heightMax: "90vh",
  },
  mediaquery: {
    tablet: "1000px",
    mobile: "800px",
    xsmovil: "640px",
  },
}
