import './App.css';
import dummyData from "./data";
import CardList from './Components/CardList';
import { Component } from 'react';
import SkeletonCard from './Components/SkeletonCard';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      videosSkeleton: [1,1,1,1,1,1,11,1,11],
      loading: false,
      timer: null
    }
  }

  setVideosState(videos = []){
    this.setState({videos})
  }

  setLoadingState(value = false){
    this.setState({loading: value})
  }
  

  componentDidMount(){
    this.setLoadingState(true);
    const timer = setTimeout(() => {
      this.setVideosState(dummyData);
      this.setLoadingState(false);
    }, 5000);
    this.setState({timer})
  }

  componentWillUnmount(){
    clearTimeout(this.state.timer)
  }



  render(){
    console.log("length of videos: ", this.state.videos.length );
    return (
      <div className="App">
         {
          this.state.videos.map((list, index) => {
            return (
              <section key={index}>
                <h2 className="section-title">{list.section}</h2>
                <CardList list={list} />
                <hr />
              </section>
            );
          })}
          <SkeletonCard videos={this.state.videosSkeleton}/>
      </div>
    );
  }
}

export default App;
