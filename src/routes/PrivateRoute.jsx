import Dashboard from '../pages/Dashboard/Dashboard';
import EmployList from '../pages/Employees/EmployeeList/EmployList';
import ProjectList from '../pages/Project/ProjectList/ProjectList';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import CreateProject from "../pages/Project/CreateProject/CreateProject.jsx";
import UpdateEmployee from "../pages/Employees/UpdateEmployee/UpdateEmployee.jsx";

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
                    {
                        path: 'create',
                        element: <CreateProject />,
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
                    {
                        path: 'update',
                        element: <UpdateEmployee />,
                    },
                ],
            },
        ],
    },
];

export default PrivateRoute;
