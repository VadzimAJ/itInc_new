type ButtonProps = {
    title: string
    callBack: () => void;
}

export const Button = ({title, callBack}:ButtonProps) => {

    const onClickHandler = () => {callBack();}

    return (
        <button onClick={onClickHandler}> {title} </button>
    )
}