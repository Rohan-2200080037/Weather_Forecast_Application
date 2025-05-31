import {useContext} from 'react'
import AppContext from '../context/AppContext'

const Card = ({children}) => {
    const {theme} = useContext(AppContext)
    return (
       <div className={`transition-all duration-300 transform hover:scale-[1.02] ${theme === 'dark' ? 'dark' : ''}`}>
            <div className="rounded-2xl min-h-96 w-full shadow-xl dark:shadow-2xl p-6 xl:p-10 bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 border dark:border-gray-700 hover:ring-2 hover:ring-blue-400">
                {children}
            </div>
        </div>

    )
}

export default Card