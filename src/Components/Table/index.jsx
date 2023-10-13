/* eslint-disable react/prop-types */
import "./Table.scss"
const TableList = (props) => {
  const tableHead = [
    "Name",
    "Email",
    "Channel",
    "Address",
    "Postal",
    "City",
    "Province",
  ];
  return (
    <table className="table-wrapper" role="table">
      <thead role="rowgroup">
        <tr role="row">
          {tableHead?.map((val) => (
            <th key={val} role="columnheader">
              {val}
            </th>
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {props?.data?.map((el) => (
          <tr key={el?.id} role="row" onClick={()=>props?.setSelectedHandler(el)}>
            <td role="cell">{el?.name}</td>
            <td role="cell">{el?.email}</td>
            <td role="cell">{el?.channel}</td>
            <td role="cell">{el?.address}</td>
            <td role="cell">{el?.postal}</td>
            <td role="cell">{el?.city}</td>
            <td role="cell">{el?.province}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TableList;
