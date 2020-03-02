import React, {Component} from 'react'


class ErrorBoundry extends Component {

  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error, info){
    this.setState({hasError: true})
  }

  render(){
    return(
      this.state.hasError ?  (<h1>Unexpected Error</h1>)  :  (<div>{ this.props.children }</div>)

    )
    
    }
  }


export default ErrorBoundry;