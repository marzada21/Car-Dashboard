import Background from '../assets/images/car-bg.jpg'
import DataTable from '../components/DataTable'


function Dashboard() {
  return (
    <div 
    style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '92vh',
    }} 
    className='flex flex-row justify-center opacity-50'
>
    <DataTable />
</div>

  )
}

export default Dashboard
