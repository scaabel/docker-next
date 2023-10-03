import useFetch from "@/helper/useFetch";
import Item from "@/components/item";
import Share from "@/components/share";

const Main = ({isFormShare, setIsFormShare, isAuth, currUser}: any) => {
    const {data: items, error, isLoading} = useFetch('item')

    return (
        <div className="main-wrapper mt-4 flex flex-col md:w-1/2 gap-4 mx-auto">
            {!isLoading && !error && !isFormShare &&
                items.map((item: any, index: any) => {
                    return (<Item key={index} {...item}/>)
                })
            }

            {isFormShare && <Share isAuth={isAuth} setIsFormShare={setIsFormShare} currUser={currUser}/>}
        </div>
    )
}

export default Main
