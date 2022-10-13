import React, { useImperativeHandle, useRef } from "react"

const UIInput = React.forwardRef(({ label, input, input: { id } }, ref) => {
    const inputRef = useRef()

    useImperativeHandle(ref, () => ({
        getValue: () => {
            return inputRef.current.value
        }
    })
    )
    return (<div>
        <label htmlFor={id}>{label}</label>
        <input {...input} ref={inputRef}/>
    </div>)
})

export default UIInput;