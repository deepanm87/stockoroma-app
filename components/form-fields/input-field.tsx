import { InputFieldType } from "@/types/input-field-types"

export const InputField = ({
    label,
    name,
    type = "text",
    error,
    placeholder
}: InputFieldType ) => {
    
    return (
        <div className="mb-6">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                autoComplete="off"
            />
            { error && <p id={`${name}-error`}>{error.join(",")}</p> }
        </div>
    )
}