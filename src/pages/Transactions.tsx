import { ReactElement, useCallback, useState } from 'react'
// import React, { ReactElement, useCallback, useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Column } from 'react-table';
import TableHOC from '../components/TableHOC';
import { Link } from 'react-router-dom';


interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Prathmesh",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className='red'>Processing</span>,
    action: <Link to="/admin/transaction/abc">Manage</Link>,
  },
  {
    user: "Kalpesh",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className='red'>Processing</span>,
    action: <Link to="/admin/transaction/abc">Manage</Link>,
  },
  {
    user: "Pranav",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className='red'>Processing</span>,
    action: <Link to="/admin/transaction/abc">Manage</Link>,
  },
]

const Transactions = () => {

  const [data] = useState<DataType[]>(arr)

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true,
    ),[]
  )

  return (
    <div className='adminContainer'>
      {/* Sidebar */}
      <AdminSidebar />
      {/* Main Section */}
      <main className='main'>{Table()}</main>
    </div>
  )
}

export default Transactions
