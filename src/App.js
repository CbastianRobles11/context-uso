

import Profile from './components/Profile'
import UserList from './components/UserList'
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      {/* //todo lo que este dentro de la funcion userstate podra accedre a todo lo que tenga el userstate */}
      <UserState>
        <div className="container p-4">
          <div className="row">

            <div className="col-md-7">
              <UserList />
            </div>
            <div className="col-md-5">
              <Profile />
            </div>

          </div>

        </div>
      </UserState>


    </div>
  );
}

export default App;
