import React from "react";

import styles from "./list.module.sass"

export default function ListItem({item, like, del}){
  let likeColor
  if(item.liked){likeColor = "red"}else{likeColor = "black"}
  return(
    <div className={styles.listItem}>
      <div className={styles.listItemBody}>{item.body}</div>
      <div className={styles.icons}>
        <i className="fas fa-heart" onClick={() => like(item)} style={{color: likeColor}}></i>
        <i className="fas fa-trash" onClick={() => del(item)} style={{color: "black"}}></i>
      </div>
    </div>
  )
}