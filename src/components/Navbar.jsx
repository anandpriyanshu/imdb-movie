
import NavBarItems from './NavBarItems'

const Navbar = () => {

    return (
        <div className='flex dark:bg-gray-500 bg-blue-200 p-4 lg:text-lg justify-center gap-5 '>
            <NavBarItems title="Trending" param="fetchTrending" />
            <NavBarItems title="Top Rated" param="fetchTopRated" />
        </div>
    )
}

export default Navbar