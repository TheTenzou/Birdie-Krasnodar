import React from "react"
import useSticky from "./hooks/useSticky"
import Welcome from "./components/welcome"
import Navbar from "./components/navbar"

function App() {
    const { isSticky, elemnt } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky} />
            <Welcome element={elemnt} />
        </>
    )
}

export default App