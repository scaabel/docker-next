const MyAccount = () => {
    return (
        <div className="my-account-wrapper">
            <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-2 items-center">
                <div className="w-full flex-auto text-right">
                    Welcome aa@aa.haha
                </div>
                <div className="flex-auto">
                    <button type="button"
                            className="w-max">
                        Share a movie
                    </button>
                </div>
                <div className="flex-auto">
                    <button type="button"
                            className="w-max">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyAccount