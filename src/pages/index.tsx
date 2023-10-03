import Header from "@/components/header";
import Main from "@/components/main";
import {NextRequest, NextResponse} from "next/server";
import {useState} from "react";

export default function Home({isLogin}: any) {
    const [currUser, setCurrUser] = useState()
    const [isAuth, setIsAuth] = useState(isLogin)
    const [isFormShare, setIsFormShare] = useState(false)


    return (
        <main className="container mx-auto m-4">
            <Header isAuth={isAuth} setIsAuth={setIsAuth} currUser={currUser} setCurrUser={setCurrUser}
                    setIsFormShare={setIsFormShare}/>
            <Main isFormShare={isFormShare} setIsFormShare={setIsFormShare} isAuth={isAuth} currUser={currUser}/>
        </main>
    )
}

export const getServerSideProps = async ({req, res}: { req: NextRequest, res: NextResponse }) => {
    return {
        props: {
            isLogin: req.cookies.hasOwnProperty('login_token')
        }, // Will be passed to the page component as props
    }
}
