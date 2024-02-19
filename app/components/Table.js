import { capitalize } from "../lib/utils";
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
                        <td>Tobmbol Action</td>
                    </tr>
                ))
            }
            <tr>
                <td>1</td>
                <td>JOB 1</td>
                <td>PAMERAN 1</td>
                <td>EXHIBITOR 1</td>
                <td>LIHAT</td>
                <td>Tobmbol Action</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>EXHIBITOR 1</td>
                <td>LIHAT</td>
                <td>Tobmbol Action</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>EXHIBITOR 1</td>
                <td>LIHAT</td>
                <td>Tobmbol Action</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>EXHIBITOR 1</td>
                <td>LIHAT</td>
                <td>Tobmbol Action</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>EXHIBITOR 1</td>
                <td>LIHAT</td>
                <td>Tobmbol Action</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>EXHIBITOR 1</td>
                <td>LIHAT</td>
                <td>Tobmbol Action</td>
            </tr>
        </table>
    );
}
