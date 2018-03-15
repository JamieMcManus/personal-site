import React from 'react';

export default class Search extends React.Component{
    
    filterUpdate(){
        const val =this.myValue.value;
        //pass filtertext back up
        this.props.filterUpdate(val)
        //Clear selected project
        this.props.selectedProject('');
    } 
    
    render(){
        console.log(this.props.filterText);
        return(
            <header>
            <form className="filterForm">
                    <input type="text" ref={(value)=>{this.myValue=value}} onChange={this.filterUpdate.bind(this)} placeholder="Type to filter..." />
                </form>
            </header>

        )
    }
}