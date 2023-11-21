// const Hello = function(){
// const Hello = () => {
//     <>1aaa</>
// };
// export default Hello;
import { useState } from "react";
import styles from "./Hello.module.css";

export default function Hello(){
  const showName = () => {
    console.log('mike');
  }
  const [like, setLike] = useState("like");
  function likeFn(){
    setLike(like === "like" ? "dont" : "like");
  }
  return <>
    <div className={styles.box}>Hello box11</div>
    <div>
      <button onClick={showName}>Show name</button>
      <button onClick={likeFn} className={like}>좋아요</button>
    </div>
  </>
}