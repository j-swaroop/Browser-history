import './App.css'
import {Component} from "react"
import HistoryItem from "./components/ItemComponent"

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class App extends Component{
    state = {
        historyList: initialHistoryList,
        searchInput: "",
    }

    onDisplaySearchInput = (event) => {
        const {searchInput} = this.state
        this.setState({
            searchInput: event.target.value
        });
    }
    
    onDeleteItem = (id) => {
      const {historyList} = this.state;
      const filteredList = historyList.filter(eachItem => eachItem.id !== id);
      this.setState({historyList: filteredList})
    }

    render(){
        const {searchInput, historyList} = this.state
        // console.log(historyList)
        const searchResults = historyList.filter((eachItem) => eachItem.title.toLowerCase().includes(searchInput.toLowerCase()))

        let ifEmpty;

        if (historyList.length === 0){
          ifEmpty = <p className="no-history"> There is no history to show</p>
        }else if (searchResults.length === 0){
          ifEmpty = <p className="no-history"> There is no history to show</p>
        }else{
          ifEmpty = (<ul className="history-items">
                        {searchResults.map(eachItem => <HistoryItem onDeleteItem={this.onDeleteItem} key={eachItem.id} historyItem={eachItem}/>)}
                      </ul>)
        }

        return(
            <div className="container">
                <div className="nav-bar">
                    <div className="nav-container">
                        <img className="app-logo" alt="app logo" src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"/>
                        <div className="search-container">
                            <img className="search-icon" alt="search" src="https://assets.ccbp.in/frontend/react-js/search-img.png"/>
                            <input onChange={this.onDisplaySearchInput} className="search-input" placeholder="Search history" type="search"/>
                        </div>
                    </div>
                </div>
                <div className="content-container">
                  {ifEmpty}
                </div>
            
            </div>
        )
    }
}

export default App
