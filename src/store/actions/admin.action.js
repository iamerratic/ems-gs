import { db } from '../../config/firebase.config';

export function setEmployees(employees) {

    return {
        type: 'SET_EMPLOYEES',
        payload: employees
    };
}

export function setEmployeesAsync() {

    return function (dispatch) {

        db.collection('users').where('isEmp', '==', true).get().then(function (qSnap) {
            var employees = [];

            qSnap.forEach(function (qDocSnap) {
                employees.push(qDocSnap.data());
            });

            employees = employees.reduce(function (acc, val) {
                return [...acc, { name: val.name, mobile: val.mobile }];
            }, []);

            dispatch(setEmployees(employees));
        });
    }
}