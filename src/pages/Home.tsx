import Background from '../assets/images/car-bg.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-10 bg-slate-200 bg-opacity-40 text-slate-800 border text-center shadow-2xl text-2xl'>Car Inventory Dashboard <br /> | CT Assignment |</h3>
        </div>
    </div>
  )
}

export default Home