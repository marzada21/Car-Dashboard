import Background from '../assets/images/car-bg.jpg'


function Dashboard() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center bg-cover bg-fixed opacity-50 blur-sm'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='text-white'>Car Dashboard</h3> { /*placeholder*/ }
        </div>
    </div>
  )
}

export default Dashboard
