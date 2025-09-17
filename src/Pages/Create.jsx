import SideBar from "../Components/SideBar";
import Details from "../Components/Details";
const Create = () => {
  return (
    <div>
        <div>
            Sub Top Bar
        </div>
        <div className='flex min-h-svh'>
            <div className='max-w-1/8 h-screen'>
                <SideBar/>
            </div>
            <div className="flex-1 ">
                <Details/>
            </div>
            <div className="flex-1">
                see the recipt
            </div>
        </div>
    </div>
  )
}

export default Create