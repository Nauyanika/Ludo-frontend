import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import moment from "moment"

function ReferrelBonus() {
  let apiBaseURL = "http://localhost:5000";
  const [data, setData] = useState([]);
  const columns = [
    { title: "Sl No", render: (rowData) => rowData.tableData.id + 1 },
    { title: "User Name",  render: rowData => ( (rowData.username?rowData.username:`Guest${rowData.user_id}` ) )},
    { title: "Phone Number", field: "phone" },
    { title: "Email ID", field: "email" },
    { title: "Amount", field:"refered_by_amount"},
    { title: " Referral ID", field: "refered_by", filtering: true }, 

    
  ];
  //get Agents
  const getReports = async () => {
    await axios({
      method: "GET",
      url: `${apiBaseURL}/api/users/getReferralData`,
      // data: user,
      // headers: {"Authorization" : `Bearer ${authToken}`}
    })
      .then(function (response) {
        if (response.data.status === 200) {
          setData(response.data.data);
        } else {

        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    getReports();
  }, []);

  return (
    <>
      <div className="col-12 col-sm-6 col-md-3">
      Referral Bonus History
      </div>
      <div className="card card-outline card-info">
        <MaterialTable
          title=" Referral Bonus  Records"
          data={data}
          columns={columns}
        />
      </div>
    </>
  );
}
export default ReferrelBonus
