import React, { useState, useEffect } from "react";
// import s from '../profile.module.css'

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)
  let activeEditMode = () => {
    setEditMode(true)
  }
  useEffect( () => {
    setStatus(props.status)
  }, [props.status])
  let deactiveEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }
  let onStatusChange = (e) => {
    setStatus( e.currentTarget.value)
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.status !== this.props.status) {
  //     this.setState({
  //       status: this.props.status
  //     })
  //   }
  // }
    return (
      <div>
        {!editMode && (
          <div>
            <span onDoubleClick= {activeEditMode}> {status || 'no status'} </span>
          </div>
        )}
        {editMode && (
          <div>
            <input onChange = { onStatusChange } onBlur = {deactiveEditMode} autoFocus value={status} />
          </div>
        )}
      </div>
    );
}

export default ProfileStatus;
