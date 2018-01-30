import React from 'react'
import { Link } from 'react-router'
import { colors } from '../../styles'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      i: 0
    }
  }

  componentWillMount() {
    this.props.instance.restore(this)
  }

  componentWillUnmount() {
    let state = this.state

    this.props.instance.save(function(ctx) {
      ctx.setState(state)
    })
  }

  render() {
    return(
      <div style={Object.assign({}, this.props.style, {})}>
        <p>{"Home"}</p>
        <p onClick={() => this.setState({i: this.state.i + 1})}>{this.state.i}</p>
        <Link to={"/other"}>
          <p>other</p>
        </Link>
      </div>
    )
  }
}

module.exports = Home
