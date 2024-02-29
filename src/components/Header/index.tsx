import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo'
import { GoSearch } from 'react-icons/go'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FaChevronDown } from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi'
import { Button } from '../Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const links = [
  {
    name: 'Overview',
    path: '/dashboard',
  },
  {
    name: 'Manage Classes',
    path: '/dashboard/classes',
  },
  {
    name: 'Manage Courses',
    path: '/dashboard/courses',
  },
  {
    name: 'Reports',
    path: '',
  },
]

const Header = () => {
  const location = useLocation()

  const checkActive = (path: string) => {
    return location.pathname === path
  }
  return (
    <header className="border-b border-b-slate-300">
      <div className="flex py-5 md:py-0 text-white items-center container mx-auto">
        <Logo />

        {/* small -> medium */}
        <div className="md:hidden ml-auto flex items-center">
          <Button className="text-slate-400">
            <IoMdNotificationsOutline size={30} />
          </Button>

          <Button>
            <HiMenuAlt1 size={30} />
          </Button>
        </div>

        {/* medium -> large */}
        <div className="hidden md:flex ml-10 flex-1">
          <ul className="flex child:py-8 gap-x-5 items-center">
            {links.map((link) => (
              <li
                key={link.name}
                className={`font-bold box-content ${
                  checkActive(link.path)
                    ? 'text-green-400 border-b-green-400 border-b-4'
                    : 'text-slate-400'
                }`}
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center ml-auto gap-x-3">
            <div className="flex items-center gap-2 bg-white p-2 rounded focus-within:outline focus-within:outline-blue-400">
              <GoSearch className="text-slate-600 text-lg" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-slate-600"
              />
            </div>

            <Button className="text-slate-400">
              <IoMdNotificationsOutline size={25} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="ml-2">John Doe</span>
                <FaChevronDown className="ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
