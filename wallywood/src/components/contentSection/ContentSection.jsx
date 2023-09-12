import { Title } from '../title/Title'


export const ContentSection = ({children, title, isTrue, content}) => {

    return (
        <>
        <div >
            <Title title={title}/>
            <section>
                {children}
                {isTrue ? content : ""}
            </section>
        </div>
      
        </>
    )
}