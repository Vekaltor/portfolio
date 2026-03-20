interface FieldProps {
    label: string
    type: string
    placeholder: string
    required?: boolean
}

export default function Field(props: FieldProps) {
    const {label, type, placeholder, required} = props;
    return (
        <div className="flex flex-col gap-[.42rem]">
            <label className="text-[.7rem] font-semibold text-[var(--text2)] tracking-[.05em]">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                className="rounded-[10px] px-4 py-[.76rem] text-[.87rem] text-[var(--text)] outline-none border border-[var(--border)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(74,222,128,.1)] cursor-none transition-all"
                style={{background: 'var(--bg2)', fontFamily: 'Inter, sans-serif'}}
            />
        </div>
    )
}

