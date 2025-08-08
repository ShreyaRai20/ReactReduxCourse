import { Component } from "react"


class HeadingClass extends Component {
    constructor (props){
        super(props)

        this.name = ""
        this.age = 8
    }
  render(){

    this.setState({name: "Momos"})
    return (
      <div>
        Hello Everyone! This is from class based component. {this.props.name}
        {/* {this.name} */}
      </div>
    )
  }
}

export default HeadingClass