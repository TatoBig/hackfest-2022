import Goals from 'components/core/goals'
import styles from 'components/core/goals/Grid.module.scss'

const goals = () => {
  return (
    <div className={styles.container} style={{ backgroundColor: '#FFFFFF' }}>
      <div className={styles.gallery}>
       <Goals color = '#6D8299' titulo="1" contenido="Aplicar el Marco Decenal de Programas sobre Modalidades de Consumo y Producción Sostenibles, con la participación de todos los países y bajo el liderazgo de los países desarrollados" links="https://www.oneplanetnetwork.org/sites/default/files/10yfp-general-brochure-es.pdf" >
       </Goals>
       <Goals color = '#986D8E' titulo="2" contenido="De aquí a 2030, lograr la gestión sostenible y el uso eficiente de los recursos naturales." links="https://www.ceupe.com/blog/que-es-la-gestion-de-los-recursos-naturales.html#:~:text=La%20gesti%C3%B3n%20ambiental%20sostenible%20es,sin%20desechos)%2C%20lo%20que%20permite" >
       </Goals>
       <Goals color = '#87A8A4' titulo="3" contenido="De aquí a 2030, reducir a la mitad el desperdicio de alimentos per capita mundial en la venta al por menor y a nivel de los consumidores y reducir las pérdidas de alimentos." links="https://www.unep.org/es/resources/informe/indice-de-desperdicio-de-alimentos-2021" >
       </Goals>
       <Goals color = '#F0C38E' titulo="4" contenido="Gestionar los productos químicos y los desechos a lo largo de su ciclo de vida              " links="https://www.ffem.fr/es/gestion-ecologicamente-racional-de-productos-quimicos-y-de-residuos-peligrosos" >
       </Goals>
       <Goals color = '#B7CADB' titulo="5" contenido="De aquí a 2030, reducir considerablemente la generación de desechos mediante actividades de prevención, reducción, reciclado y reutilización." links="https://twenergy.com/ecologia-y-reciclaje/regla-de-las-5-r/" >
       </Goals>
       <Goals color = '#A68DAD' titulo="6" contenido="Alentar a las empresas, en especial las grandes empresas y transnacionales, a que adopten prácticas sostenibles." links="https://pactoglobal.com.gt/global_news/empresas-y-organizaciones-ante-el-ods-12/" >
       </Goals>
       <Goals color = '#97C4B8' titulo="7" contenido="Promover prácticas de adquisición pública que sean sostenibles, de conformidad con las políticas y prioridades nacionales." links="http://los17ods.org/los-17-objetivos-para-2030/consumo/" >
       </Goals>
       <Goals color = '#D9CAB3' titulo="8" contenido="Asegurar que las personas  tengan la información y los conocimientos para el desarrollo sostenible y los estilos de vida en armonía con la naturaleza." links="https://sdg.humanrights.dk/es/targets2?target=12.8" >
       </Goals>
       <Goals color = '#E6B2C6' titulo="9" contenido="Ayudar a los países en desarrollo a fortalecer su capacidad científica y tecnológica para avanzar hacia modalidades de consumo y producción más sostenibles." links="https://www.un.org/es/our-work/support-sustainable-development-and-climate-action" >
       </Goals>
       <Goals color = '#C2B0C9' titulo="10" contenido="Elaborar y aplicar instrumentos para vigilar los efectos en el desarrollo y turismo sostenible que cree puestos de trabajo y promueva la cultura y los productos locales." links="https://www.aprendedeturismo.org/el-turismo-y-los-objetivos-de-desarrollo-sostenible-de-naciones-unidas/" >
       </Goals>
       <Goals color = '#B5CDA3' titulo="11" contenido="Racionalizar los subsidios ineficientes a los combustibles fósiles que fomentan el consumo antieconómico eliminando las distorsiones del mercado." links="https://www.unep.org/es/noticias-y-reportajes/reportajes/se-acaba-el-tiempo-de-los-subsidios-los-combustibles-fosiles" >
       </Goals>
      </div>
    </div>
  )
}

export default goals
