import { title } from "./title.module.css"

export default function Title ({ children }) {
    return (
        <div>
            <h1 className={title}>{children}</h1>
        </div>
    )
}
