import React, {useState, createRef} from "react";

import styles from "./list.module.sass"

import ListItem from "./listItem"

export default function List({name, list}){
  const [posts, changeList] = useState(list)
  let likedCount = 0
  list.forEach(item => {
    if(item.liked){
      likedCount++
    }
  })
  const like = (liked) =>{
    const res = posts.map(post => {
      if(liked === post){
        post.liked ? post.liked = false : post.liked = true
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
    console.log(typeof element)
    const obj = {
      body: element,
      liked: false,
    }
    const res = [...posts]
    res.push(obj)
    changeList(res)
  }
  const inputRef = createRef()
  return(
    <div className={styles.list}>
      <div className={styles.header}>
        <div className="name">{name}</div>
        <div className="statistic">Всего {posts.length} записей, {likedCount} <i className="fas fa-heart" style={{color: "red"}}></i> с которых понравились</div>
      </div>
      <div className={styles.body}>
        {posts.map((item, key) =>{
          return <ListItem item={item} key={key} like={like} del={del} />
        })}
        <div className={styles.create}>
          <input ref={inputRef} type="text" />
          <button onClick={() => {create(inputRef.current.value)}}>Создать</button>
        </div>
      </div>
    </div>
  )
}