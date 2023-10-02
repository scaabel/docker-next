const Login = () => {
    return (
        <div className="login-form-wrapper">
            <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-2">
                <div className="w-full flex-1">
                    <div className="bg-white flex border border-gray-200 rounded">
                        <input placeholder="Email"
                               type="email"
                               className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
                    </div>
                </div>
                <div className="w-full flex-1">
                    <div className="bg-white flex border border-gray-200 rounded">
                        <input placeholder="Password"
                               type="password"
                               className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
                    </div>
                </div>
                <div className="w-full flex-1">
                    <button type="button"
                            className="p-1 px-2 bg-blue-500 w-full text-gray-800 border border-gray-200 rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login/Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login