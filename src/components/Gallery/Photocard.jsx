function Photocard(props) {
    return(
        <>
        <div className="photo-card">
            <div className="card-header">
                <img className="avatar" src="/avatar.png"  alt="Avatar" />
                <h3>{props.user}</h3>
            </div>
            <div className="photo">
            <img src={props.photo} alt="Photo" />
            </div>

            <div className="card-action">
                <button>Like {props.likes}</button>
                <button>Save</button>
            </div>
            <p>{props.descr}</p>
        </div>
        </>
    )
}

export default Photocard