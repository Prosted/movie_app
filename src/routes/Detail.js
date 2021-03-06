import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount(){
        const {location, history} =this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const {location} = this.props
        if (location.state){
            return <div className="movie-detail">
                        <img src={location.state.poster} />
                        <div className="movie-detail__data">
                            <span className="movie-detail__title">{location.state.title}</span>
                            <span className="movie-detail__genres">{location.state.genres}</span>
                            <span className="movie-detail__year">{location.state.year}</span>
                            <span className="movie-detail__summary">{location.state.summary}</span>
                        </div>
                </div>
        }else{
            return null;
        }
    }
}


export default Detail;