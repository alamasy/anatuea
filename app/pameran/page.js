import Button from '../components/Button'
import Table from '../components/Table'
import { layout, titlePage } from "./pameran.module.css"

export default function Pameran () {
    return (
        <main className={layout}>
            <h1 className={titlePage}>Daftar Job Pameran</h1>
            <Button>Add New</Button>
            <Table />

        </main>
    )
}
