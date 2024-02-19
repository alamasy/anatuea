import { capitalize } from "../lib/utils";
import Button from "./Button";
import "./table.css";

const dataPameran = [
    {
        id: "1",
        namaJob: "ini nama job",
        namaPameran: "ini nama pameran",
        exhibitor: "ini nama exhibitor",
        isDone: false,
    },
    {
        id: "2",
        namaJob: "ini nama job",
        namaPameran: "ini nama pameran",
        exhibitor: "ini nama exhibitor",
        isDone: false,
    },
    {
        id: "3",
        namaJob: "ini nama job",
        namaPameran: "ini nama pameran",
        exhibitor: "ini nama exhibitor",
        isDone: false,
    },
    {
        id: "4",
        namaJob: "ini nama job",
        namaPameran: "ini nama pameran",
        exhibitor: "ini nama exhibitor",
        isDone: false,
    },
    {
        id: "5",
        namaJob: "ini nama job",
        namaPameran: "ini nama pameran",
        exhibitor: "ini nama exhibitor",
        isDone: false,
    },
];

export default function Table () {
    return (
        <table>
            <tr>
                <th>No</th>
                <th>Nama Job</th>
                <th>Nama Pameran</th>
                <th>Exhibitor</th>
                <th>Is Done</th>
                <th>Action</th>
            </tr>
            {
                dataPameran.map((el, id) => (
                    <tr key={id}>
                        <td>{el.id}</td>
                        <td>{capitalize(el.namaJob)}</td>
                        <td>{capitalize(el.namaPameran)}</td>
                        <td>{capitalize(el.exhibitor)}</td>
                        <td>{capitalize(el.isDone ? "selesai" : "belum selesai")}</td>
                        <td><Button>Invoice</Button></td>
                    </tr>
                ))
            }

        </table>
    );
}
