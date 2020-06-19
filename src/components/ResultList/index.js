import React from "react";
import './style.css'

function ResultList(props) {
  return (
    <>
    <div className="container-fluid">
        <div className="card mt-3">
            <div className="card-header pb-0 mb-0">
                <h3 className="card-title">{props.results.name}</h3>
            </div>

            <div className="card-body pb-0 mb-0">
                <div className="row">
                    <div className="col-md-3">
            
                    <img alt="avatar" style={{width:"100%"}} className="thumbnail" src={props.results.avatar_url}></img>
                        <a id="viewProfile" className="btn waves-effect btn-dark btn-block mt-2" href={props.results.html_url}>View Profile</a>

                    </div>

                    <div className="col-md-9">
                                <div className="row justify-content-center mt-2 mb-2">
                                <span className="badge #4db6ac teal lighten-2 white-text">Public Repos: {props.results.public_repos}</span>
                                <span className="badge #4db6ac teal lighten-2 white-text">Followers: {props.results.followers}</span>
                                <span className="badge #4db6ac teal lighten-2 white-text">Following: {props.results.following}</span> 
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item">Compnay: {props.results.company}</li>
                                    <li className="list-group-item">Website/Blog: <a href={props.results.blog}>{props.results.blog}</a></li>
                                    <li className="list-group-item">Location: {props.results.location}</li>
                                    <li className="list-group-item">Member Since: {props.results.created_at}</li>
                                    <li className="list-group-item">Last Profile Update: {props.results.updated_at}</li>
                                    <li className="list-group-item">Profile Bio: {props.results.bio}</li>
                                </ul>
                            </div> 

                </div>
            </div>

        </div>
    </div>


        <div className="container-fluid">
                <div className="card mt-3">
                    <div className="card-header">
                        <h3 className="card-title">Latest Repos</h3> 
                    </div>

                    <div className="card-body mb-0 pb-0">
                        <div className="row mb-0 pb-0">
                            <div id="repos" className="col s12 mb-0 pb-0">

                            </div> 
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
};

export default ResultList;


