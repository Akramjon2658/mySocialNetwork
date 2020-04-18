import React from "react";
// import s from '../profile.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }
  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactiveEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateUserStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick= {this.activeEditMode}> {this.props.status || 'no status'} </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange = { this.onStatusChange } onBlur = {this.deactiveEditMode} autoFocus value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
