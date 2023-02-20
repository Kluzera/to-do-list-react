import "./style.css"


const Section = ({title, body, extraHeaderContetnt}) => (
    <section className="section section--under">
       <header className="section__lowerHeader">
         <h2 className="section__title">{title}</h2>
          {extraHeaderContetnt}
        </header>
         <div className="list__taskContainer">
           {body}
         </div>
  </section>
)

export default Section;