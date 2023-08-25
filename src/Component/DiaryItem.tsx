import "./DiaryItem.css";
import { getEmotionImgById } from "./Util";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import React from "react";
const DiaryItem = ({id, emotionId, content, date}) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`)
  }
  const goEdit = () => {
    navigate(`/edit/${id}`)
  }
  return (
    <div className="DiaryItem">
      <div className={["img_section", `img_section_${emotionId}`].join(" ")} onClick={goDetail}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
      </div>
      <div className="info_section" onClick={goDetail}>
        <div className="date_wrapper">
          {new Date(parseInt(date)).toLocaleDateString()}
        </div>
        <div className="content_wrapper">
          {content.slice(0, 25)}
        </div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  )
};

export default React.memo(DiaryItem);