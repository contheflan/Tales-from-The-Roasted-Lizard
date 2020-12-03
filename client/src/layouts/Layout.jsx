import Header from "../components/Header";
import "./Layout.css"
export default function Layout(props) {
  return (
    <div className="Layout">
      <Header
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      {props.children}
    </div>
  )
}
