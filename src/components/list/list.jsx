import React, {useState, createRef} from "react";

import styles from "./list.module.sass"

import ListItem from "./listItem"

export default function List({name}){
  const lists = []
  const [posts, changeList] = useState(lists)
  let likedCount = 0
  posts.forEach(item => {
    if(item.liked){
      likedCount++
    }
  })

  const checked = (checked) => {
    const res = posts.map(post => {
      if(checked === post){
        post.checked ? post.checked = false : post.checked = true
      }
      return post
    })
    changeList(res)
  }
  const like = (liked) =>{
    const res = posts.map(post => {
      if(liked === post){
        post.liked ? 
        post.liked = false : post.liked = true
      }
      return post
    })
    changeList(res)
  }
  const del = (deleted) =>{
    const res = posts.filter(post => {
      if(deleted === post){
        return false
      }else{
        return post
      }
    })
    changeList(res)
  }
  const create = (element) =>{
    if (element === ""){
      return false
    }
    const obj = {
      body: element,
      liked: false,
      checked: false,
    }
    const res = [...posts]
    res.push(obj)
    changeList(res)
  }
  // Проверка на чекбокс "liked"
  // if(){

  // }else{
  //   {posts.map((item, key) =>{
  //     return <ListItem item={item} key={key} like={like} del={del} checked={checked} />
  //   })}
  // }

  const inputRef = createRef()
  return(
    <div className={styles.list}>
      <div className={styles.header}>
        <div className="name">{name}</div>
        <div className="statistic">Всего {posts.length} записей, {likedCount} <i className="fas fa-heart" style={{color: "red"}}></i> с которых понравились</div>
        <div className={styles.onlyLiked}>
          <div className={styles.onlyLiked_label}>Show only liked</div>
          <input className={styles.onlyLiked_checkbox} type="checkbox"></input>
        </div>
      </div>
      <div className={styles.body}>
        {posts.map((item, key) =>{
          return <ListItem item={item} key={key} like={like} del={del} checked={checked} />
        })}
        <div className={styles.create}>
          <input ref={inputRef} type="text" />
          <button onClick={() => {create(inputRef.current.value); inputRef.current.value = ""}}>Создать</button>
        </div>
      </div>
    </div>
  )
}