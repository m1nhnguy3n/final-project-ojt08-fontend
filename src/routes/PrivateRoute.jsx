import Dashboard from '../pages/Dashboard/Dashboard';
import EmployList from '../pages/Employees/EmployeeList/EmployList';
import ProjectList from '../pages/Project/ProjectList/ProjectList';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const PrivateRoute = [
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'project',
                children: [
                    {
                        path: '',
                        element: <ProjectList />,
                    },
                ],
            },
            {
                path: 'employee',
                children: [
                    {
                        path: '',
                        element: <EmployList />,
                    },
                ],
            },
        ],
    },
];

export default PrivateRoute;
