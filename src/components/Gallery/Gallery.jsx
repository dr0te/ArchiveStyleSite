import './gallery.css'
import Photocard from "./Photocard"
function Gallery() {
    return(
        <>
        <section className="gallery">
            <Photocard />
            <Photocard />
            <Photocard />
            <Photocard />
        </section>
        </>
    )
}

export default Gallery