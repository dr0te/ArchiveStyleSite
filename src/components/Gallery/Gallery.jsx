import './gallery.css'
import Photocard from "./Photocard"
function Gallery() {
    return(
        <>
        <section className="gallery">
            <Photocard 
                user="dr0te"
                descr="I love my mother"
                likes="20"
                photo="/public/logo.png"
            />
            <Photocard 
                user="gloria"
                descr="My sunny days in Monako"
            />
        </section>
        </>
    )
}

export default Gallery