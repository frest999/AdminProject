import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import './UserTable.css';
import UserMenuBtn from "../UserMenuBtn";


class UsersTable extends React.Component {

  UserImg =(cell, row)=>{
    return(
        <div className="UserNameCol ColumnsUserTable">
          <div className="UserPhoto">
            <p className={row.active ? "OnlineImg": null}></p>
            <img src={row.img} alt=""/>
          </div>
          <div>
            <p className="UserName">{row.name}</p>
            <p className="UserPost">{row.post}</p>
          </div>
        </div>
    )
  };

  UserActivity =(cell, row)=>{
    return(
        <div className="ColumnsUserTable">
          <p className={row.active ? "ActiveStatus OnlineStatus" : "ActiveStatus OfflineStatus"}>
            {row.active ? "Online now!": row.status}
          </p>
        </div>
    )
  };

  UserMail =(cell, row)=>{
    return(
        <div className="ColumnsUserTable">
          <a className="EmailLink" href="">{row.mail}</a>
        </div>
    )
  };

  UserPhone =(cell, row)=>{
    return(
        <div className="ColumnsUserTable">
          <a className="PhoneNumber" href="">{row.phone}</a>
        </div>
    )
  };

  UserMenu =()=>{
    return(
      <UserMenuBtn/>
    )
  };

  render() {

    const options = {
      sizePerPage: 7,
      hideSizePerPage: true,
      sizePerPageList: [ 7, 10, 15 ]
    };


    return (
        <div>
          <BootstrapTable
              ref='table'
              data={ this.props.data }
              pagination
              options = {options}
              tableHeaderClass='UserTableTitle'
              tableStyle={ { border: 'none' } }
              tableBodyClass='TableBody'>
            <TableHeaderColumn
                width="300px"
                dataField='id'
                thStyle={{border: 'none'}}
                dataFormat={this.UserImg}
                isKey>
              Name
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField='status'
                thStyle={{border: 'none'}}
                dataFormat={this.UserActivity}>
              Activity
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField='mail'
                thStyle={{border: 'none'}}
                dataFormat={this.UserMail}>
              Mail
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField='phone'
                thStyle={{border: 'none'}}
                dataFormat={this.UserPhone}>
              Phone
            </TableHeaderColumn>

            <TableHeaderColumn
                dataField='menu'
                thStyle={{border: 'none'}}
                width="150px"
                dataFormat={this.UserMenu}>
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
    );
  }
}

export default UsersTable;