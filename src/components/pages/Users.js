import React from 'react';
import UsersTable from "../atoms/UserTable/UsersTable";
import '../atoms/UserTable/UserTable.css';
import './Users.css';
import Select from "../atoms/Select/Select";

const UsersList = [
  {
    id: 'User1',
    img: "img/userTable/user1.png",
    name: "John Doe",
    post: "CEO",
    status: "Online now!",
    mail: "johndoe@design.com",
    phone: "(000) 111 222 333",
    active: true
  },
  {
    id: 'User2',
    img: "img/userTable/user2.png",
    name: "Nina Jones",
    post: "UX Designer",
    status: "Online now!",
    mail: "ninajones@design.com",
    phone: "(000) 111 222 333",
    active: true
  },
  {
    id: 'User3',
    img: "img/userTable/user3.png",
    name: "Alex Smith",
    post: "Web Designer",
    status: "Online now!",
    mail: "alexsmith@design.com",
    phone: "(000) 111 222 333",
    active: true
  },
  {
    id: 'User4',
    img: "img/userTable/user4.png",
    name: "Ann Clooney",
    post: "Account Manager",
    status: "20 minutes ago",
    mail: "annclooney@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
  {
    id: 'User5',
    img: "img/userTable/user5.png",
    name: "Patrick Smith",
    post: "Project Manager",
    status: "40 minutes ago",
    mail: "patricksmith@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
  {
    id: 'User6',
    img: "img/userTable/user6.png",
    name: "Nicky Hunt",
    post: "Product Designer",
    status: "1 hour ago",
    mail: "nickyhunt@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
  {
    id: 'User7',
    img: "img/userTable/user7.png",
    name: "Jane Doe",
    post: "Graphic Designer",
    status: "2 days ago",
    mail: "janedoe@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
  {
    id: 'User8',
    img: "img/userTable/user7.png",
    name: "Name 1",
    post: "Graphic Designer",
    status: "21 days ago",
    mail: "janedoe@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
  {
    id: 'User9',
    img: "img/userTable/user7.png",
    name: "Name 2",
    post: "Graphic Designer",
    status: "21 days ago",
    mail: "janedoe@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
  {
    id: 'User10',
    img: "img/userTable/user7.png",
    name: "Name 3",
    post: "Graphic Designer",
    status: "21 days ago",
    mail: "janedoe@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
  {
    id: 'User11',
    img: "img/userTable/user7.png",
    name: "Name 4",
    post: "Graphic Designer",
    status: "21 days ago",
    mail: "janedoe@design.com",
    phone: "(000) 111 222 333",
    active: false
  },
];

const usersSort = ["All Users","Online", "Offline"];

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersStatus: []
    }
  }

  componentWillMount() {
    let activity = UsersList.filter(() => {
          return UsersList
        }
    );
    this.setState({
      usersStatus: activity
    })
  }


  sortOnStatusUser =(e)=> {
  if(e.target.value === "All Users"){
      this.setState({
        usersStatus: UsersList
      });
    }
    else if (e.target.value === "Online") {
      let activity = UsersList.filter((user) => {
            return user.active
          }
      );
      this.setState({
        usersStatus: activity
      })

    }
    else if (e.target.value === "Offline") {
      let activity = UsersList.filter((user) => {
            return !user.active
          }
      );
      this.setState({
        usersStatus: activity
      });

    }

  };
  render(){
    return(
        <div className="content margin-bottom-90">
          <div className="UserSectionHeader">
            <h2 className="UserSectionTitle margin-bottom-40">Users<span className="CountUsers">({this.state.usersStatus.length})</span></h2>
            <Select
                onChange={this.sortOnStatusUser}
                data={usersSort}
                selectBlockClass="SelectLabel SelectBlock SelectBlockSort"
                selectClass="Select Select-Sort"/>
          </div>
          <UsersTable data={this.state.usersStatus}/>

        </div>
    )
  }
}

export default Users;