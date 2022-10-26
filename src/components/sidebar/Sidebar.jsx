import "./sidebar.css"
import RssFeed from '@mui/icons-material/RssFeed';
import Friend from "../Friend/Friend";
import { Users } from "../../testData"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListText">Feed</span>
                </li>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <Friend key={u.id} user={u}/>
                    ))}
                </ul>

            </ul>
        </div>
    </div>
    
  )
}
