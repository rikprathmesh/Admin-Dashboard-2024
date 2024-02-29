import React from "react";
import TableHOC from "./TableHOC";
import { Column } from "react-table";

const columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}

// const thisWillReturnJSXElement = TableHOC<DataType>(columns, [], "transactionBox", "Top Transaction")
// const storingTheReturnedValueInConstant = thisWillReturnJSXElement()
// console.log(storingTheReturnedValueInConstant);

const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return TableHOC<DataType>(columns, data, "transaction-box", "Top Transaction")();
};

export default DashboardTable;
