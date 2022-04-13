import React, { ReactNode } from 'react'
import Navbar from '@components/NavBar'

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </div>
    )
}

export default Layout