import React,{Component} from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import '../assets/css/Main.css'


const Main=()=>{
        return(
            <div className="wrapper">
                <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                <Scene pin>
                    <div className="panel blue"><span>Panel</span></div>
                </Scene>
                <Scene pin>
                    <div className="panel turqoise"><span>Panel</span></div>
                </Scene>
                <Scene pin>
                    <div className="panel green"><span>Panel</span></div>
                </Scene>
                <Scene pin>
                    <div className="panel bordeaux"><span>Panel</span></div>
                </Scene>
                </Controller>
                <div className="content"></div>
                <footer className="footer"></footer>
            </div>
        )
}



export default Main;