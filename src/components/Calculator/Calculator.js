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
            handle: "",
            totalFollowerCount: 0,
            totalCommentOnPost: 0,
            totalLikeOnPost: 0,
            influencerType: "+Others",

            userHandleError: "",
            totalFollowerCountError: "",
            totalCommentOnPostError: "",
            totalLikeOnPostError: "",
        };
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

    validate = () => {
        let userHandleError = "";
        let totalFollowerCountError = "";
        let totalCommentOnPostError = "";
        let totalLikeOnPostError = "";

        this.setState({userHandleError: ""})
        this.setState({totalFollowerCountError: ""})
        this.setState({totalCommentOnPostError: ""})
        this.setState({totalLikeOnPostError: ""})

        if (this.state.handle == "") {
            userHandleError = 'Require Field!'
        } else if (this.state.totalFollowerCount < 1) {
            totalFollowerCountError = 'Require Field!'
        } else if (this.state.totalCommentOnPost < 1) {
            totalCommentOnPostError = 'Require Field!'
        } else if (this.state.totalLikeOnPost < 1) {
            totalLikeOnPostError = 'Require Field!'
        };


        if (userHandleError) {
            this.setState({userHandleError})
            return false
        } else if (totalFollowerCountError) {
            this.setState({totalFollowerCountError})
            return false
        } else if (totalCommentOnPostError) {
            this.setState({totalCommentOnPostError})
            return false
        } else if (totalLikeOnPostError) {
            this.setState({totalLikeOnPostError})
            return false
        };

        return true
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log()
        }
    }

    // handleSubmitValidation() {
    //     if (this.state.handle == '' || this.state.totalFollowerCount < 1 || this.state.totalLikeOnPost < 1 || this.state.totalFollowerCount < 1 || this.state.influencerType == "") {
    //         alert("Some fields are empty")
    //     }
    // }

    handleInfluencerTypeSelection = (type) => {
        this.setState({influencerType: type.type});
    }

    render() {
        const influenceTypeList =["Beauty", "Blogger/Vlogger", "Fashion", "Game", "Photography", "Sport/Fitness", "Tech/Gadget", "Travel", "+Others"];
        return (
            <section className="calc-container wrapper">
                <div className="calc-left-wrapper">
                    <img className="social-img" src={social} alt="social" />
                    <h2>Why Fluence</h2>
                    <p>
                        Spend less time researching what you should be making when collaborating with brands and more time doing what you love - creating content.
                    </p>
                </div>

                <div className="calc-right-wrapper">
                    <h2>Creator's Calculator</h2>
                    <p className="form-description">Enter your social media information below to get a report that  estimates your pricing rates when monetizing your content.</p>
                    <div className="calc-wrapper">
                        <div className="calc-form-wrapper">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Social Medial Handle
                                    <input
                                        name="handle"
                                        type="text" required
                                        placeholder="@"
                                        value={this.state.handle == "" ? "" : this.state.handle}
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="warning-label">{this.state.userHandleError}</div>
                                </label>

                                <label>
                                    Total Follower Count
                                    <input
                                        name="totalFollowerCount"
                                        type="number"
                                        placeholder="Total Follower"
                                        value={this.state.totalFollowerCount == 0 ? "" : this.state.totalFollowerCount}
                                        onChange={this.handleInputChange}
                                    />
                                    <div className="warning-label">{this.state.totalFollowerCountError}</div>
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
                                    <div className="warning-label">{this.state.totalCommentOnPostError}</div>
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
                                    <div className="warning-label">{this.state.totalLikeOnPostError}</div>
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
                                            onClick = {() => {this.handleInfluencerTypeSelection({type})}}
                                        >{type}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link 
                    onClick={this.handleSubmit}
                    // type="submit"
                    className="analyze-btn" 
                    to={{pathname: '/results', state: {handle: this.state.handle, totalFollowerCount: this.state.totalFollowerCount, totalLikeOnPost: this.state.totalLikeOnPost, totalCommentOnPost: this.state.totalCommentOnPost, influenceType: this.state.influencerType}}} >Calculate</Link>
                </div>
            </section>
        )
    }
}

export default Calculator
