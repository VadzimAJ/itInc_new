type Props = {
    title: string
    callBack: ()=> void
}

export const Button = ({title, callBack}:Props) => {

    const onCkickHandler =()=>{callBack()}

    return (
        <button onClick={onCkickHandler}>{title}</button>
    )
}
