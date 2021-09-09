import React from "react";

import styles from "./list.module.sass"

export default function ListItem({item, like, del, checked}){
  let likeColor = "black"
  let checkedColor = "black"
  let textDecoration = "none"
  if(item.liked){likeColor = "red"; textDecoration = "line-through"}
  if(item.checked){checkedColor = "red"; textDecoration = "line-through"}
  return(
    <div className={styles.listItem}>
      <div style={{textDecoration: `${textDecoration} red`}} className={styles.listItemBody}>{item.body}</div>
      <div className={styles.icons}>
        <i className="fas fa-check" onClick={() => checked(item)} style={{color: checkedColor}}></i>
        <i className="fas fa-heart" onClick={() => like(item)} style={{color: likeColor}}></i>
        <i className="fas fa-trash" onClick={() => del(item)} style={{color: "black"}}></i>
      </div>
    </div>
  )
}