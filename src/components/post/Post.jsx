import "./post.css"
import MoreVert from '@mui/icons-material/MoreVert';
import VerifiedIcon from '@mui/icons-material/Verified';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Users } from "../../testData";
import { useState } from "react";

export default function Post({post}) {
    const [like, setLike] =useState(post.like);
    const [isLiked, setIsLiked] =useState(false);
    const [isVerified] =useState(Users.filter(u=>u.id===post.userId)[0].verified);

    const likeHandler =()=>{
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />

                        <div className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</div>
                        <VerifiedIcon className="postVerifiedIcon" style={{visibility: (isVerified? "visible":"hidden"), width: (isVerified?"20px":"0px")}}/>
                        <div className="postDate">{post.date}</div>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpIcon className="likeIcon" onClick={likeHandler} style={{color: (isLiked? "rgb(243, 97, 12)" : "gray")}}/>
                        <span className="postlikeCounter">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
