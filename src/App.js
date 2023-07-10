import './App.css';
import { UserProvider } from './MainSec/UserCon';
import { AddUser } from './MainSec/AddUser';
import { ListUsers } from './MainSec/ListsUser';
function App() {
  return (
    <div className="App">
      <UserProvider>
        <AddUser />
        <ListUsers />
      </UserProvider>
    </div>
  );
}

export default App;
