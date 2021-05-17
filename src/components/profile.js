import React, { Component } from 'react';
import './profile.css';
import profile from '../assets/images/image-victor.jpg';

class Profile extends Component {
    state = ({ 
        show:false
     })
    render() { 
        return ( 
            <div id="profile__card" className={this.state.show ? 'show':null}>
                <div className="profile__card__header">
                    <img onClick={() => this.setState({show:true})} style={{cursor:"pointer"}} src={profile} alt="profile"></img>
                </div>
                <div className="profile__card__name">
                    <div className="name" id={this.state.show ? 'slide':null}>
                        <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                            <div style={{padding:"0.5em 1em"}}>
                                <h2 style={{color:"hsl(229, 23%, 23%)"}}>Victor Crest</h2>
                            </div>
                            <div>
                                <h2 style={{color:"hsl(227, 10%, 46%)"}}>26</h2>
                            </div>
                        </div>
                        <div>
                            <p style={{color:"hsl(227, 10%, 46%)"}}>London</p>
                        </div>
                    </div>
                </div>
                <div id={this.state.show ? 'slideOpp':null} className="profile__card__stats">
                    <div>
                        <h2 style={{color:"hsl(229, 23%, 23%)"}}>80K</h2>
                        <p style={{color:"hsl(0, 0%, 59%)"}}>Followers</p>
                    </div>
                    <div>
                        <h2 style={{color:"hsl(229, 23%, 23%)"}}>803K</h2>
                        <p style={{color:"hsl(0, 0%, 59%)"}}>Likes</p>
                    </div>
                    <div>
                        <h2 style={{color:"hsl(229, 23%, 23%)"}}>1.4K</h2>
                        <p style={{color:"hsl(0, 0%, 59%)"}}>Photos</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Profile;