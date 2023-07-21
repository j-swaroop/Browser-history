import "./index.css"

const HistoryItem = (props) => {
    const {historyItem, onDeleteItem} = props;
    const {id, timeAccessed, logoUrl, title, domainUrl } = historyItem;

    const deleteHistoryItem = () => {
        onDeleteItem(id)
    }

    return(
        <li className="history-item">
            <p className="time-heading"> {timeAccessed}</p>
            <div className="history-details-container">
                <div className="history-details">
                    <img alt="domain logo" className="img" src={logoUrl}/>
                    <p className="heading"> {title}</p>
                    <p className="url"> {domainUrl} </p>
                </div>
                <button onClick={deleteHistoryItem} type="button" data-testid="delete">
                    <img className="delete-img" alt="delete" src="https://assets.ccbp.in/frontend/react-js/delete-img.png"/>
                </button>
            </div>
        </li>
    )
} 

export default HistoryItem;