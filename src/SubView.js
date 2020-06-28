import React, { Component } from 'react';

class SubView extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" onClick={()=>this.props.set({id:this.props.id,des:this.props.des,title:this.props.title})} src={this.props.img} alt="Card image cap"></img>
                    <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.des}</p>
                    </div>
                   
                </div>

            </div>
        );
    }
}

export default SubView;