import React,{Component} from 'react';
import MainView from './MainView';
import axios from 'axios';
import SubView from './SubView';

class App extends Component {
  constructor(){
    super()
    this.state={
      search:"10minutes versity",
      id:"",
      des:"",
      title:"",
      data:[]
    }
  }
  select=data=>{
    this.setState({
      id:data.id,
      des:data.des,
      title:data.title
    });
  }
  async componentDidMount(){
    const res=await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search}&part=snippet&maxResults=5&key=AIzaSyA4GoSN6vPmMPsPBYQtRvKuOW0RqpXcUF8
  `)
  .then(item=>this.setState({data:item.data.items,id:item.data.items[0].id.videoId,des:item.data.items[0].snippet.description,title:item.data.items[0].snippet.channelTitle}))
  }
  setsearch=e=>{
    this.setState({search:e.target.value});
  }
  sub=async (e)=>{
  e.preventDefault();
  const res=await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search}&part=snippet&maxResults=5&key=AIzaSyA4GoSN6vPmMPsPBYQtRvKuOW0RqpXcUF8
  `)
  .then(item=>this.setState({data:item.data.items,id:item.data.items[0].id.videoId}))
  }
  render(){
    return (
      <div className="container-fluied">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Welcome to KB's Youtube clone APP</h1>
            <br></br>
  
            <form className="form-inline" onSubmit={this.sub}>
  
              <div className="form-group mx-sm-3 mb-2">
                <input type="text"  name="name" onChange={this.setsearch}   className="form-control" placeholder="Write search keyword"></input>
              </div>
              <button type="submit" className="btn btn-primary mb-2">Search</button>
            </form>
            <hr>
            </hr>
  
  
          </div>
  
        </div>
        <div className="row">
          <div className="col-lg-8 justify-content-lg-between">
            <MainView id={this.state.id} des={this.state.des} title={this.state.title}/>
          </div>
          <div className="col-lg-4">
     {this.state.data.map(item=>{
       return( <SubView key={item.id} id={item.id.videoId} set={this.select} title={item.snippet.channelTitle} des={item.snippet.description} img={item.snippet.thumbnails.medium.url}/>)
        
     })}
          
            
  
          </div>
  
        </div>
      </div>
  
    );
  }
  
}

export default App;