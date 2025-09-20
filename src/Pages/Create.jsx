import SideBar from "../Components/SideBar";
import Details from "../Components/Details";
import Recipt from "../Components/Recipt";
import SubTopBar from "../Components/SubTopBar";
const Create = () => {
  return (
    <div>
        <div className="mx-7">
            <SubTopBar/>
        </div>
        <div className='flex min-h-svh'>
            <div className='max-w-1/8 h-screen'>
                <SideBar/>
            </div>
            <div className="flex-1 ">
                <Details/>
            </div>
            <div className="flex-1">
                <Recipt/>
            </div>
        </div>
    </div>
  )
}

export default Create