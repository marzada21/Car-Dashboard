import { useState } from "react"
import Button from "./Button"
import Modal from "./Modal"
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hide: true },
    { field: 'make', headerName: "Make", flex: 1 },
    { field: 'model', headerName: "Model", flex: 1 },
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'color', headerName: "Color", flex: 1 },
    { field: 'vin', headerName: "Vin Number", flex: 1 }
]

function DataTable() {
    let [ open, setOpen ] = useState(false);
    const { carData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
    }

    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="container mx-auto my-5">
                <h2 className="text-2xl font-bold my-2 text-center text-black">Current Cars:</h2>
                <div className="flex space-x-4 m-10">
                    <Button 
                        onClick={handleOpen} 
                        className="flex-grow p-3 bg-sky-700 text-white hover:bg-sky-800"
                    > 
                        Add New Car 
                    </Button>
                    <Button 
                        onClick={handleOpen} 
                        className="flex-grow p-3 bg-sky-600 text-white hover:bg-sky-700"
                    > 
                        Update Selected Car 
                    </Button>
                    <Button 
                        onClick={deleteData} 
                        className="flex-grow p-3 bg-sky-500 text-white hover:bg-sky-600"
                    > 
                        Delete Selected Car 
                    </Button>
                </div>
                <div className="h-96 bg-slate-200 rounded shadow-md m-10 opacity-90">
                    <DataGrid 
                        rows={carData} 
                        columns={columns} 
                        pageSize={5}
                        checkboxSelection={true} 
                        onSelectionModelChange={(item: any) => {
                            setSelectionModel(item)
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default DataTable
