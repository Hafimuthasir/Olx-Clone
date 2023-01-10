import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState([])
  const {postDetails} = useContext(PostContext)
  console.log(postDetails)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} =postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{
        setUserDetails(doc.data())
        console.log(doc.data())
      })
    })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails? postDetails.url:""}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p> {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;

