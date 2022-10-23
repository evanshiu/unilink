import "./topbar.css"
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Message from '@mui/icons-material/Message';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">unilink</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon"/>
            <input placeholder="Search unilink" className="searchInput"/>

          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarIcons">
            <div className="topbarIcon">
              <Person />
              <span className="iconNotification"></span>
            </div>
            <div className="topbarIcon">
              <Message />
              <span className="iconNotification"></span>
            </div>
            <div className="topbarImageContainer">
              <img src="../../assets/ALLTOOWELL.png" alt="" className="topbarImage" />
            </div>
          </div>
        </div>
    </div>
  )
}

