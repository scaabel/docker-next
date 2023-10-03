const MyAccount = ({currUser, setIsAuth, setIsFormShare}: any) => {
    const logout = async () => {
        const req = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: null
        })

        if (req.ok) {
            // setCurrUser(null)
            setIsAuth(false)
        } else {
            alert('Cannot logout!')
        }
    }

    const shareFormToggle = () => {
        setIsFormShare(true)
    }

    return (currUser &&
        <div className="my-account-wrapper">
            <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-2 items-center">
                <div className="w-full flex-auto text-right">
                    Welcome {currUser.email}
                </div>
                <div className="flex-auto">
                    <button type="button"
                            onClick={shareFormToggle}
                            className="w-max">
                        Share a movie
                    </button>
                </div>
                <div className="flex-auto">
                    <button type="button"
                            onClick={logout}
                            className="w-max">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyAccount
