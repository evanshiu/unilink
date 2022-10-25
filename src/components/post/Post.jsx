import "./post.css"
import MoreVert from '@mui/icons-material/MoreVert';
import VerifiedIcon from '@mui/icons-material/Verified';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Users } from "../../testData";

export default function Post({post}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt="" className="postProfileImg" />

                        <div className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</div>
                        <VerifiedIcon className="postVerifiedIcon"/>
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
                        <ThumbUpIcon className="likeIcon" />
                        <span className="postlikeCounter">{post.like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
