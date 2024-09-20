import { BrowserRouter as Router,Route, Routes} from 'react-router-dom' ;

import Login from './components/LoginForm'; 
import ClinicForm from './components/ClinicForm';
import ClinicDetails from './components/ClinicDetails';
import AdminForm from './components/AdminForm';
import GrantPermission from './components/GrantPermission';

function AppRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/'  element={<Login />}/>
                <Route path='/clinic-form'  element={<ClinicForm />}/>
                <Route path='/clinic-id'  element={<ClinicDetails />}/>
                <Route path='/admin'  element={<AdminForm />}/>
                <Route path='/permission'  element={<GrantPermission />}/>
            </Routes>
        </Router>
    )

}

export default AppRouter ;
