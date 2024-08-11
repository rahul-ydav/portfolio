import './Sidebar.css';
import {ReactComponent as LinkedInIcon} from './assets/linkedin.svg';
import {ReactComponent as GithubIcon} from './assets/github.svg';
import {ReactComponent as GmailIcon} from './assets/gmail.svg';
import {ReactComponent as WhatsappIcon} from './assets/whatsapp.svg';

function Sidebar(){
    const linkedInLink = "https://www.linkedin.com/in/rahulydv559";
    const githubLink = "https://github.com/rahul-ydav";
    const gmailAdd = "mailto:rahulydv559@gmail.com";
    const whatsappLink = "https://api.whatsapp.com/send?phone=919991779889";
    return (
        <div className='sideBar'>
            <a href={linkedInLink} target="_blank"><LinkedInIcon/></a>
            <a href={githubLink} target="_blank"><GithubIcon/></a>
            <a href={gmailAdd} target="_blank"><GmailIcon/></a>
            <a href={whatsappLink} target="_blank"><WhatsappIcon/></a>
        </div>
    );
}
export default Sidebar;