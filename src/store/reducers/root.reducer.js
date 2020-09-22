import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import adminReducer from './admin.reducer';
import employeeReducer from './employee.reducer';


var rootReducer = combineReducers({

    user: userReducer,
    admin: adminReducer,
    employee: employeeReducer
});

export default rootReducer;