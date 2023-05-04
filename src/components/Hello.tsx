import { HelloProps } from "../types/FormDataTypes"

export const Hello = ({firstName, lastName, age}: HelloProps) => {
    return(
        <>
        <h1>
            Good Morning, {firstName} {lastName}
        </h1>
        <p>You are {age} years old!</p>
        </>
    )
}
