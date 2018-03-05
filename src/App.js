import React, { Component } from 'react';
import './App.css';
import ProjectList from'./components/projectList';
import Search from'./components/Search';
import ProjectDetail from './components/ProjectDetails';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        filterText:'',
        selectedId:''
      }
  }

  filterUpdate(value){
    this.setState({
      filterText:value
    })
  }

  selectedProject(value){
    this.setState({
      selectedId:value
    })
  };

  render() {
    console.log(this.state.selectedId);
    return (
      <div className="">
        <Search filterText={this.state.filterText} filterUpdate={this.filterUpdate.bind(this)} selectedProject={this.selectedProject.bind(this)}/>
        <ProjectList filterText={this.state.filterText} data={this.props.data} selectedProject={this.selectedProject.bind(this)}  />
        <ProjectDetail data={this.props.data} selectedId={this.state.selectedId} /> 
      </div>
    );
  }
}

export default App;
