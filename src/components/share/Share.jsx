import "./share.css"
import PermMedia from '@mui/icons-material/PermMedia';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="../../assets/ALLTOOWELL.png" alt="" className="shareProfileImg"/>
                <textarea placeholder="What's on your mind" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption">
                  <PermMedia className="shareIcon"/>
                  <div className="shareOptionText">Add media</div>
                </div>
              </div>

              <button className="shareButton">Share</button>




            </div>
        </div>
    </div>
  )
}