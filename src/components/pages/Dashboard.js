import React, { useContext } from "react";
import { AuthContext } from "../config/Auth";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <table>
        <tbody>
          <tr>
            <td>UID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{currentUser.uid}</td>
          </tr>
          <tr>
            <td>E-mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>{currentUser.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
