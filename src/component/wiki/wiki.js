import React,{Component} from 'react'
import '../../assets/css/Wiki.css'
import axios from 'axios'

class Wiki extends Component{
    render(){
        return(
            <div className="wrapper">
               <nav className="wiki_nav">
                   <h2>Wiki</h2>
                   <ul className="wiki_list">
                        <li><a href="#">위키1</a></li>
                        <li><a href="#">위키2</a></li>
                        <li><a href="#">위키3</a></li>
                   </ul>
               </nav>
               <section className="wiki_sec">
                   <div className="inner">
                        <div className="btn_box">
                            <button className="nomal_btn">새글쓰기</button>
                            <button className="nomal_btn">수정하기</button>
                            <button className="nomal_btn">삭제하기</button>
                        </div>
                        <div className="title">
                            <h3>제목제목</h3>
                            <p>최종 수정일 : 0000-00-00 / 작성일 : 0000-00-00</p>
                        </div>
                        <div className="w_con">
                            <p>내용</p>
                            <p>내용</p>
                        </div>
                   </div>
               </section>
            </div>
        )
    }        
}


export default Wiki;