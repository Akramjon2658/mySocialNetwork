import {
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (st) => {
  return {
    dialogsPage: st.dialogsPage
  }
}
let mapDispatchToProps = (dp) => {
  return {
    sendMessage: (text) => {
      dp(sendMessageCreator(text));
    }
  }
};  
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)


