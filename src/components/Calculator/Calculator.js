/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import social from '../../assets/social.svg';
import instaIcon from '../../assets/instaIcon.svg';
import tiktokIcon from '../../assets/tiktokIcon.svg';
import "./Calculator.css"


class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            handle: "@",
            totolFollowerCount: 0,
            totalCommentOnPost: 0,
            totalLikeOnPost: 0,
            influencerType: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleClick = (type) => {
        console.log(type.type);
        this.setState({influencerType: type.type});
    }

    render() {
        console.log(this.state.influencerType)
        const influenceTypeList =["Beauty", "Blogger/Vlogger", "Fashion", "Game", "Photography", "Sport/Fitness", "Tech/Gadget", "Travel"];
        return (
            <section className="calc-container">
                <div className="calc-left-wrapper">
                    <img className="social-img" src={social} alt="social" />
                    <h2>Why Fluence</h2>
                    <p>
                        Spend less time researching what you should be making when collaborating with brands and more time doing what you love - creating content.
                    </p>
                </div>

                <div className="calc-right-wrapper">
                    <h1>Creator's Calculator</h1>
                    <p>Enter your social media information below to get a report that  estimates your pricing rates when monetizing your content.</p>
                    <div className="calc-wrapper">
                        <div className="calc-form-wrapper">
                            <form>
                                <label>
                                    Social Medial Handle
                                    <input
                                        name="handle"
                                        type="number"
                                        placeholder="@"
                                        value={this.state.handle == "@" ? "" : this.state.handle}
                                        onChange={this.handleInputChange}
                                    />
                                </label>

                                <label>
                                    Total Follower Count
                                    <input
                                        name="totolFollowerCount"
                                        type="number"
                                        placeholder="Total Follower"
                                        value={this.state.totolFollowerCount == 0 ? "" : this.state.totolFollowerCount}
                                        onChange={this.handleInputChange}
                                    />
                                </label>

                                <label>
                                    # of Comments (Based on last post)
                                    <input
                                        name="totalCommentOnPost"
                                        type="number"
                                        placeholder="Total Comment"
                                        value={this.state.totalCommentOnPost == 0 ? "" : this.state.totalCommentOnPost}
                                        onChange={this.handleInputChange}
                                    />
                                </label>

                                <label>
                                    # of Likes (Based on last post)
                                    <input
                                        name="totalLikeOnPost"
                                        type="number"
                                        placeholder="Number of Likes"
                                        value={this.state.totalLikeOnPost == 0 ? "" : this.state.totalLikeOnPost}
                                        onChange={this.handleInputChange}
                                    />
                                </label>
                            </form>
                        </div>
                        <div className="calc-type-wrapper">
                            <div className="media-type">
                                <h3>Calculator Type</h3>
                                <div className="media-icon-list">
                                    <img id="insta-icon" src={instaIcon} />
                                    <img id="tiktok-icon" src={tiktokIcon} />
                                </div>
                            </div>
                            <div className="influencer-type">
                                <h3>Influence Type (select one)</h3>
                                <div className="type-list-wrapper">
                                    {influenceTypeList.map((type, i) => (
                                        <p 
                                            className="influence-type-tag"
                                            key={i}
                                            onClick = {() => {this.handleClick({type})}}
                                        >{type}
                                        </p>
                                    ))}
                                </div>
                                <Link className="analyze-btn" to={{pathname: '/results', state: {handle: this.state.handle, totalFollowerCount: this.state.totolFollowerCount, totalLikeOnPost: this.state.totalLikeOnPost, totalCommentOnPost: this.state.totalCommentOnPost, influenceType: this.state.influencerType}}} >Analyze</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Calculator
