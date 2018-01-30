import React from 'react'
import { Link } from 'react-router'
import { colors } from '../../styles'

class Other extends React.Component {
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
        <p>{"Other"}</p>
        <p onClick={() => this.setState({i: this.state.i + 1})}>{this.state.i}</p>
        <Link to={"/"}>
          <p>home</p>
        </Link>
      </div>
    )
  }
}

module.exports = Other
