import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Share from "../../components/share/Share"
import Post from "../../components/post/Post"
import {Posts} from "../../testData"

export default function Profile() {
  return (
    <div className="pageContainer">
        <Topbar/>
        <div className="profile">
            <div className="profileRight">
                <div className="profileHeader">
                
                    <div className="profileWrapper">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img src="../../assets/IMG_0482.png" alt="" className="profileCoverImg" />
                                <img src="../../assets/IMG_0482.png" alt="" className="profileUserImg" />
                            </div>
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">kkkkkkk</h4>
                            <span className="profileInfoDesc">@hhhhhh</span>
                        <span>
                            <span className="profileStats"><span className="profileStatsNum">10</span> followers</span>
                            <span className="profileStats"><span className="profileStatsNum">100</span> following</span>
                        </span>
                        
                        </div>
                    </div>
                </div>

                <div className="feed">
                    <div className="feedWrapper">
                        <Share/>
                        {Posts.map((p) => (
                        <Post key={p.id} post={p}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
