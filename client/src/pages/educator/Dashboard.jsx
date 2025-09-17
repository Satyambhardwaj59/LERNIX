import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../context/AppContext'
import { dummyDashboardData } from '../../assets/assets';
import Loading from './../../components/student/Loading';

const Dashboard = () => {

  const[dashboardData, setDashboardData] = useState(null);
  const {currency} = useContext(AppContext);

  const fetchDashboardData = async () => {
    setDashboardData(dummyDashboardData)
  }

  useEffect(() => {
    fetchDashboardData()
  }, []);

  return dashboardData ? (
    <div className='min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 pt-8 pb-0'>
      <div className='space-y-5'>
        <div className='flex flex-wrap gap-5 items-center '>
          <div className='flex items-center gap-3  border border-blue-500 p-4 w-56 rounded-md'>

          </div>

        </div>
      </div>
      
    </div>
  ) : <Loading/>
}

export default Dashboard
