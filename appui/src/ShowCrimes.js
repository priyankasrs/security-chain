import React, { Component } from 'react';
import './ShowCrimes.css'

export class ShowCrimes extends Component{
    handleChange=(movie)=>{
        let _movie=movie;
        this.props.vote(_movie)
    }

    render(){
        let movieList=this.props.movies.map((movie,i)=>
        <tr key={i}>
            <td onClick={this.handleChange.bind(this,movie.name)}>{movie.name}</td>
            <td>{movie.rating}</td>
        </tr>)

        return(
            <div>
            <h3> Update Crime List</h3>
            <hr />
            <table >
                <tbody>
                    <tr>
                        <th>Crime Location</th>
                        <th>No of Alerts/Crime Warnings</th>
                    </tr>
                    {movieList}
                </tbody>
            </table>
          </div>
        )
    } 
}

export default ShowCrimes;