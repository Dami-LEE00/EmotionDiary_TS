import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../Hooks/useDiary";
import Header from "../Component/Header";
import Button from "../Component/Button";
import { DiaryDisPatchContext } from "../App";
import { useContext, useEffect } from "react";
import Editor from "../Component/Editor";
import { setPageTitle } from "../Component/Util";


const Edit = () => {
  const {id} = useParams();
  const data = useDiary(id)
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }

  const {OnDelete, onUpdate} = useContext(DiaryDisPatchContext)
  const onClickDelete = () => {
    if(window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다!")) {
      OnDelete(id);
      navigate("/", {replace: true})
    }
  }
  const onSubmit = (data) => {
    if(window.confirm("일기를 정말 수정할까요?")) {
      const{date, content, emotionId} = data;
      onUpdate(id, date, content, emotionId);
      navigate("/", {replace: true})
    }
  }

  useEffect(() => {
    setPageTitle(`${id}번 일기 수정하기`)
  }, [])


  if(!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    return <div>
      <Header 
        title = {"일기 수정하기"}
        leftChild={<Button text={"< 돌아가기"} onClick={goBack}/>}
        rightChild={<Button type={"negative"} text={"삭제하기"} onClick={onClickDelete}/>}
      />
      <Editor onSubmit={onSubmit}/>
    </div>
  }
}

export default Edit;