import {useState} from 'react'
import './App.css';
import {Header} from '../../components/Header/header'
import {Searcher} from '../../components/Searcher/searcher'
import {UserInfo} from'../../components/UserInfo/userInfo'
import {UserRepo} from '../../components/UserRepo/userRepo'
import {api} from '../../services/api'

function App() {
  const [inputSeacher, setInputSeacher] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserRepo, setCurrentUserRepo] = useState({})

  const handleInputSearcher = (event) =>{
    setInputSeacher(event.target.value)
  }

  const handleSearcher = (event) =>{
    event.preventDefault();
    getCurrentUser(inputSeacher)
    setIsUser(true)
    setInputSeacher('')
  }
  
  const getCurrentUser = async (userName) =>{
    try {
      const data =  await api.get('users/' + userName)
      setCurrentUser(data.data)
      getRepoFromUser(userName)
    } catch (error) {
      window.alert('Could not find this user');
      console.log(error.message)
    }
  }
  
  const getRepoFromUser = async (userName) =>{
    try{
      const data =  await api.get('users/' + userName + '/repos')
      setCurrentUserRepo(data.data)
    } catch(error) {
      //window.alert(error.message)
    }
  }

  return (
    <>
      <div className="app-container">
        <div className='app-body-header-container'>
          <Header />
        </div>
        <div className='app-body-seacher-container'>
          <Searcher 
            inputSeacher={inputSeacher} 
            handleInputSearcher={handleInputSearcher}
            handleSearcher={handleSearcher}
          />
          {
            isUser ? (
              <>
                <UserInfo currentUser={currentUser}/>
                <UserRepo currentUserRepo={currentUserRepo} />
              </>
            )
            : null
          }
        </div>      
      </div>
    </>
    );
}

export default App;
