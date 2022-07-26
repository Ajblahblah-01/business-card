import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
function ProfilePic(){
    return (
        <img alt = "" src = {require("./Rectangle.png")} className = "profile_pic" />
    )
}
function About(){ //
    return(
        <div className = "about_sec">
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <h3>laurasmith.website</h3>
            <button className="btn"><img alt="" src = {require("./email_icon.png")}></img>Email</button>
            <p className = "text">
                <h1 className="text-heading">About</h1>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
            <p className = "text">
                <h1 className="text-heading">Interests</h1>
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
        </div>
    )
}
function Footer(){
    return (
        <div className="footer">
            <img className="footer-icon" alt="" src = {require("./twitter.png")}></img>
            <img className="footer-icon" alt="" src = {require("./facebook.png")}></img>
            <img className="footer-icon" alt="" src = {require("./instagram.png")}></img>
            <img className="footer-icon" alt="" src = {require("./linkedin.png")}></img>
            <img className="footer-icon" alt="" src = {require("./gitHub.png")}></img>
        </div>
    )
}
function Main(){
    return(
        <div className = "main" >
            <ProfilePic />
            <About />
            <Footer />
        </div>
    )
}
root.render(
    <Main />
);