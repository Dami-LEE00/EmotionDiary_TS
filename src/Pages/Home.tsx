import { type } from "os";
import Button from "../Component/Button";
import Header from "../Component/Header";
import Editor from "../Component/Editor";
import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate, setPageTitle } from "../Component/Util";
import DiaryList from "../Component/DiaryList";


const Home = () => {
  const data = useContext(DiaryStateContext)
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if(data.length >= 1) {
      const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter((it) => beginTimeStamp <= it.date && it.date <= endTimeStamp)
      )
    } else {
      setFilteredData([])
    }
  }, [data, pivotDate]);

  useEffect(() => {
    setPageTitle("나의 감정 일기장")
  }, [])

  
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(),
    pivotDate.getMonth() + 1));
  }
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(),
    pivotDate.getMonth() - 1));
  }

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />} 
      />
      <DiaryList data ={filteredData}/>
    </div>
  ) 
}

export default Home;