import React from 'react'
import { useLocation } from 'react-router-dom';

type Props = {}

const Footer = (props: Props) => {
  const {pathname} = useLocation()
  if (
    pathname === "/registerDeveloper" ||
    pathname === "/registerRecruiter" ||
    pathname === "/login" ||
    pathname === "/chooseProfile"
  ) {
    return null;
  } else {
  return (
    <footer>
        <div>
            div*4

        </div>
    </footer>
  )
}
}
export default Footer