function Photocard() {
    return(
        <>
        <div className="photo-card">
            <div className="card-header">
                <img className="avatar" src="/avatar.png"  alt="Avatar" />
                <h3>Username</h3>
            </div>
            <div className="photo">
            <img src="/photo.jpg" alt="Photo" />
            </div>

            <div className="card-action">
                <button>Like</button>
                <button>Save</button>
            </div>
            <p>Description</p>
        </div>
        </>
    )
}

export default Photocard