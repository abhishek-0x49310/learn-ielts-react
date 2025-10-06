import { createContext, useMemo, useState } from "react"

export const AppContext = createContext(null)

export function AppContextProvider({ children }) {
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [page, setPage] = useState("")
    const [pageData, setPageData] = useState(null)

    const value = useMemo(() => ({
        loggedInUser,
        setLoggedInUser,
        page,
        setPage,
        pageData,
        setPageData
    }), [loggedInUser, page, pageData])

    return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
    )
}
