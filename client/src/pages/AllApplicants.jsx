import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { renderStatus } from "../components/lib/consts/renderers/renderStatus";

const columns = [
  { field: "fullName", headerName: "Full Name", width: 200 },
  {
    field: "hiringStage",
    headerName: "Hiring Stage",
    type: "singleSelect",
    renderCell: renderStatus,
    // editable: true,
    width: 150,
    valueOptions: ({ row }) => {
      if (row === "Interview") {
        return (
          <div className="border p-3 border-dark-yellow">
            <span className="text-dark-yellow">{row}</span>
          </div>
        );
      }
    },
  },
  { field: "appliedDate", headerName: "Applied Date", width: 200 },
  { field: "jobRole", headerName: "Job Role", width: 200 },
  { field: "action", headerName: "Action", width: 200 },
];

export default function AllApplicants() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("src/components/lib/consts/dummy/dummy_table.json") // Verify the path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  console.log(tableData);

  return (
    <div className="p-3">
      <div className="w-full h-screen">
        <DataGrid rows={tableData} columns={columns} pagination />
      </div>
    </div>
  );
}
