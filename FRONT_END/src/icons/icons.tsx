import styled from "styled-components";
import { IoIosSearch, IoMdChatbubbles } from "react-icons/io";
import { FiAlignLeft } from "react-icons/fi";
import { BsFillSendFill,  BsBoxArrowRight } from "react-icons/bs";
import { MdKeyboardVoice, MdOutlineInsertEmoticon } from "react-icons/md";
import { GoPaperclip } from "react-icons/go";
import { GrConfigure } from "react-icons/gr";
import { FaBook,  FaUserFriends } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { LuPencil } from "react-icons/lu";
import { BiHelpCircle } from "react-icons/bi";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";

export const BtnSearch = styled(IoIosSearch)`
    font-size: 1.5rem;
    padding: 5px;
`
export const BtnMenu = styled(FiAlignLeft)`
    font-size: 1.5rem;
    padding: 5px;

    @media screen and (min-width: 600px){
        display: none;
    }
`

// INPUT
export const BtnMsgSend = styled(BsFillSendFill)`
    font-size: 1.3rem;
    padding: 5px;
    color: #89d223;
`
export const BtnAudioSend = styled(MdKeyboardVoice)`
    font-size: 1.6rem;
    padding: 5px;
    color: #1f86da;
`
export const BtnIcons = styled(MdOutlineInsertEmoticon)`
    font-size: 1.6rem;
    padding: 5px;
    color: #fdfdfdf0;
`
export const BtnOther = styled(GoPaperclip)`
    font-size: 1.6rem;
    padding: 5px;
    color: #8251eb;
`

// NAV 
export const IconChat = styled(IoMdChatbubbles)`
    font-size: 1.6rem;
    padding: 5px;
    color: white;
    width: 26px;
    color: #72f061a4;
    `
// NAVRIGHT

export const IconHome = styled(IoHomeOutline)`
    font-size: 1.8rem;
    padding: 5px;
    color: white;
    width: 25px;
`
export const IconFriend = styled(FaUserFriends)`
    font-size: 1.6rem;
    padding: 5px;
    color: white;
    width: 22px;
    margin-left: 4px;
`
export const IconWord = styled(TbWorld)`
    font-size: 1.6rem;
    padding: 5px;
    color: white;
    width: 22px;
    color: #4a77e0;
`

export const LeftCont = styled(BsBoxArrowRight)`
    font-size: 1.6rem;
    padding: 5px 6px;
    color: white;
    width: 20px;
    margin-left: 2px;
    color: #f53d3d;
`
export const ConfigIcon = styled(GrConfigure)`
    font-size: 1.6rem;
    padding: 5px;
    color: white;
    width: 22px;
    color: #d8e1f6;
`
export const HelpIcon = styled(BiHelpCircle)`
    font-size: 1.6rem;
    padding: 5px;
    color: white;
    width: 22px;
    color: #98e498;
`
export const HistoryIcon = styled(FaBook)`
    font-size: 1.6rem;
    padding: 5px;
    color: white;
    width: 18px;
    color: #6516a6;
    margin-left: 4px;
`
export const IconHomeWork = styled(LuPencil)`
    font-size: 1.6rem;
    padding: 5px;
    color: white;
    width: 20px;
    margin-left: 3px;
    color: orange;
`

// theme
 export const Dark = styled(MdOutlineDarkMode)`
     width: 27px;
     font-size: 40px;
     color: #dbdb09;
 `

 