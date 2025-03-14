'use client'

const { useSidebar } = require("@/Context")
const { default: SideBar } = require("./Sidebars")

const OverallLayout = ({children}) => {
    const {isSidebarOpen} = useSidebar()
return <>
    <SideBar show={isSidebarOpen} />
    {children}
</>
}

export default OverallLayout