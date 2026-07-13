import './gallery.css'
import Photocard from "./Photocard"

const posts = [
    {
        id: 1,
        user: "dr0te",
        descr: "I love my mother",
        likes: 20,
        photo: "/logo.png"
    },
    {
        id: 2,
        user: "Emilia",
        descr: "My sunny days in Monako",
        likes: 5,
        photo: ""
    }
];

function Gallery() {
    return(
        <>
        <section className="gallery">
            {posts.map(post => (
                <Photocard
                id={post.id}
                user={post.user}
                likes={post.likes}
                descr={post.descr}
                photo={post.photo}
                />
            ))
            }
        </section>
        </>
    )
}

export default Gallery