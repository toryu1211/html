import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import { Remarkable } from 'remarkable';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import '../../assets/css/Wiki.css'
import axios from 'axios'


class Wiki extends Component{
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, **world**!' };
      }
    
      handleChange(e) {
        this.setState({ value: e.target.value });
      }
    
      getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
      }
    

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
                        <div className="wiki_view">
                            <div className="btn_box">
                                <button className="nomal_btn">새글쓰기</button>
                                <button className="nomal_btn">수정하기</button>
                                <button className="nomal_btn">삭제하기</button>
                            </div>                
                            <div className="title">
                                <h3 dangerouslySetInnerHTML={this.getRawMarkup()} ></h3>
                                <p>최종 수정일 : 0000-00-00 / 작성일 : 0000-00-00</p>
                            </div>
                            <div className="w_con">
                                <p>내용</p>
                                <p>내용</p>
                            </div>
                        </div>
                        <div className="wiki_write">
                            <form>
                                <input type="text" className="title_input" placeholder="제목을 입력하세요." onChange={this.handleChange} value={this.state.value} />         
                                <textarea></textarea>  
                                <input type="submit" value="전송" />               
                            </form>                              
                        </div>
                   </div>
               </section>
            </div>
        )
    }
    
    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    

}


export default Wiki;