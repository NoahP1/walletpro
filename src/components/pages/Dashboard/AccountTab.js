import React, { useContext } from "react";
import { AuthContext } from "../../config/Auth";

function AccountTab() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="tab-container">
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
}

export default AccountTab;
