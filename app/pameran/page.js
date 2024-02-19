import Button from '../components/Button'
import Table from '../components/Table'
import Title from '../components/Title'
import { btn } from "./pameran.module.css"

export default function Pameran () {
    return (
        <>
            <Title>Daftar Pameran</Title>
            <Button className={btn}>Add New</Button>
            <Table />

        </>
    )
}
