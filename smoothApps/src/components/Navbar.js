import React from 'react'
import { NavData } from "../data/NavData";
import { Link} from 'react-scroll'

const Navbar = () => {
  return (
    <React.Fragment>
    <section>
      <div className=" fixed h-20 w-full bg-gray-500 grid grid-cols-4 md:w-3/5 md:mx-auto">
        {
            NavData.map((item, index) => {
                return(
                    <div key={index}>
                        <div className={`uppercase h-20 centered text-2xl font-bold ${item.backgroundColor}`}>
                            <Link to={item.path} spy={true} smooth={true} offset={2} duration={500}>
                            <span>{item.title}</span>
                            </Link>
                           
                        </div>
                    </div>
                )
            })
        }
          
      </div>
    </section>
  </React.Fragment>
  )
}

export default Navbar