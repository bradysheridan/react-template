import React from 'react'
import { colors } from '../styles'
import { createInstance } from '../helpers'

class Root extends React.Component {
  constructor(props) {
    super(props)

    this.instances = {}
  }

  // instantiate initial child
  componentWillMount() {
    let child = this.props.children.type.displayName
    console.log("Instantiating initial child", child)
    this.instances[child] = createInstance()
    console.log("-->", this.instances[child])
  }

  // dynamically instantiate child as route changes
  componentWillReceiveProps(nextProps) {
    let currChild = this.props.children.type.displayName
    let nextChild = nextProps.children.type.displayName

    if (currChild !== nextChild && !this.instances[nextChild]) {
      console.log("Instantiating", nextChild)
      this.instances[nextChild] = createInstance()
      console.log("-->", this.instances[nextChild])
    } else {
      console.log(nextChild, "already instantiated")
      console.log("-->", this.instances[nextChild])
    }
  }

  render() {
    let childName = this.props.children.type.displayName
    let pageStyles = {
      width: '100%',
      height: '100%'
    }

    return(
      <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>

        { /* clone element passed to route component in app.js passing along required props */
          React.cloneElement(this.props.children, {
            instance: this.instances[childName],
            style: pageStyles
          })
        }

      </div>
    )
  }
}

module.exports = Root
