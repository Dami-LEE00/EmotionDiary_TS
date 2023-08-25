import { useNavigate } from "react-router-dom";
import Button from "../Component/Button";
import Header from "../Component/Header";
import Editor from "../Component/Editor";
import { useContext, useEffect } from "react";
import { DiaryDisPatchContext } from "../App";
import { setPageTitle } from "../Component/Util";


const New = () => {
  const {onCreate} = useContext(DiaryDisPatchContext);
  const navigate = useNavigate();
  const goBack= () => {
    navigate(-1);
  }
  const onsubmit = (data) => {
    const {date, content, emotionId} = data;
    onCreate(date, content, emotionId)
    navigate("/", {replace : true})
  }

  useEffect(() => {
    setPageTitle("새 일기 쓰기")
  }, [])



  return (
    <div>
      <Header 
        title={"새 일기 쓰기"}
        leftChild={<Button text = {"< 뒤로가기"} onClick={goBack} />}
      />  
      <Editor onSubmit={onsubmit}/>
    </div>
  )
}



export default New;