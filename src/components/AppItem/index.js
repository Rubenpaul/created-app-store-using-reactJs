// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li className="app-card">
      <img src={imageUrl} alt={appName} className="app-pic" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
