import {useState} from "react";

const Login = ({setCurrUser, setIsAuth}: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        const req = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const reqValue = await req.json()

        if (req.ok) {
            setCurrUser(reqValue)
            setIsAuth(true)
        } else {
            alert('Cannot login!')
        }
    }

    return (
        <div className="login-form-wrapper">
            <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-2">
                <div className="w-full flex-1">
                    <div className="bg-white h-full flex border border-gray-200 rounded">
                        <input placeholder="Email"
                               type="email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                               className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
                    </div>
                </div>
                <div className="w-full flex-1">
                    <div className="bg-white h-full flex border border-gray-200 rounded">
                        <input placeholder="Password"
                               type="password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                               className="p-1 px-2 appearance-none outline-none w-full text-gray-800"/>
                    </div>
                </div>
                <div className="w-max-fit">
                    <button type="button"
                            onClick={login}
                            className="p-1 px-2 bg-blue-500 w-full text-gray-800 border border-gray-200 rounded text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                        Login/Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
