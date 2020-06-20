import React from "react";
import moment from 'moment'
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
                    <div className="col-md-3 pb-3">
            
                    <img alt="avatar" style={{width:"100%"}} className="thumbnail" src={props.results.avatar_url}></img>
                        <a id="viewProfile" className="btn waves-effect btn-dark btn-block mt-2" href={props.results.html_url}>View Profile</a>

                    </div>

                    <div className="col-md-9 pb-3">
                                <div className="row justify-content-center mt-2 mb-2">
                                <span className="badge badge-primary p-1 m-1">Public Repos: {props.results.public_repos}</span>
                                <span className="badge badge-secondary p-1 m-1">Followers: {props.results.followers}</span>
                                <span className="badge badge-success p-1 m-1">Following: {props.results.following}</span> 
                                </div>
                                <ul className="list-group">
                                    <li className="list-group-item">Company: {props.results.company}</li>
                                    <li className="list-group-item">Website/Blog: {props.results.blog}</li>
                                    <li className="list-group-item">Location: {props.results.location}</li>
                                    <li className="list-group-item">Member Since: {moment(props.results.created_at).format("MMM Do YYYY")}</li>
                                    <li className="list-group-item">Last Profile Update: {moment(props.results.updated_at).format("MMM Do YYYY")}</li>
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
                            <div id="repos" className="col col-md-12 mb-0 pb-0">

                            {props.repos? props.repos.map(repo => 
                                <div className="row">
                                    <div className="col col-md-12"> 
                                <div className="card m-2">
                                    <div className="card-content p-3">
                                        <strong>{repo.name}</strong><br/>
                                        <p>Description: {repo.description}</p>
                                        <a href={repo.html_url}>{repo.html_url}</a> 
                                    </div>  
                                </div>
                            </div>
                        </div>
                            ): <p>No repo available!</p>}
                            </div> 
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
};

export default ResultList;


