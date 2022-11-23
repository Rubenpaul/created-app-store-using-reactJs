// Write your code here
import './index.css'

const TabItem = props => {
  const {TabDetails, updateState, isActive} = props
  const {displayText, tabId} = TabDetails

  const ActiveClassName = isActive ? 'active-btn' : ''
  const onClickGetApps = () => {
    updateState(tabId)
  }

  return (
    <li className="tab-name-container">
      <button
        className={`button ${ActiveClassName}`}
        type="button"
        onClick={onClickGetApps}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
