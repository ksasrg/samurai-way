import s from './FormControls.module.css'

export const Textarea = ({ input, meta, ...props }: any) => {

    const isError = meta.touched && meta.error

    return <div className={s.formControl + " " + (isError ? s.error: '')}>
        <div>
            <textarea {...input} {...props} />
        </div>
        {isError && <span>{meta.error}</span>}
    </div>
}


export const Input = ({ input, meta, ...props }: any) => {

    const isError = meta.touched && meta.error

    return <div className={s.formControl + " " + (isError ? s.error: '')}>
        <div>
            <input {...input} {...props} />
        </div>
        {isError && <span>{meta.error}</span>}
    </div>
}