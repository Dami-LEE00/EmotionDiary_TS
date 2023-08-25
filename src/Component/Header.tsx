import { deflate } from "zlib";
import "./Header.css";

const Header = ({title, leftChild, rightChild}: any) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  )
}

export default Header;