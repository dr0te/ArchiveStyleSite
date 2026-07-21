import { useState } from "react"
import { Link } from "react-router-dom";

function Photocard(props) {
   
   const[likes, setLikes] = useState(props.likes??0);

   const[isLiked, setIsLiked] = useState(false);

   const[isSaved, setIsSave] = useState(false);

   const[comments, setComments] = useState([
                    "Good one"
                ])

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
            <h3>Comments</h3>
            <p>{props.descr}</p>
        </div>
        </>
    )
}

export default Photocard