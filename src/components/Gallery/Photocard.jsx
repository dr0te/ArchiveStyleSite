import { useState } from "react"
function Photocard(props) {
   
   const[likes, setLikes] = useState(props.likes??0);
   const[isLiked, setIsLiked] = useState(false);
   const[isSaved, setIsSave] = useState(false);
    function handleLike(){
        if(!isLiked){
            setLikes(likes+1)
            setIsLiked(true)
                    }
        else{
            setLikes(likes-1)
            setIsLiked(false)
        }
   }
   function handleSave(){
        if(!isSaved){
            
            setIsSave(true)
        }
        else{
            setIsSave(false)
        }

   }

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
                <button onClick={handleLike} className={isLiked ? "liked" : "likef"}>
                    {isLiked ? "Liked" : "Like"} {likes}
                </button>
                <button onClick={handleSave}>{isSaved ? "Saved" : "Save"}</button>
            </div>
            <p>{props.descr}</p>
        </div>
        </>
    )
}

export default Photocard