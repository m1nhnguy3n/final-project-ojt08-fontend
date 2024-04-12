
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../../../redux/slices/employeeSlice';

const EmployList = () => {

  const dispatch = useDispatch();

  const { employees } = useSelector((state) => state.employee);


  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch])

  console.log(employees)


    return <div>EmployList</div>;
};

export default EmployList;
