import React from 'react';
import SalesChartComponent from "../organisms/SalesChartComponent";
import ReportChartComponent from "../organisms/ReportChartComponent";
import BoxNotification from "../atoms/BoxNotification";
import Task from "../atoms/Task";
import Message from "../atoms/Message";
import Activity from "../atoms/Activity";

class Home extends React.Component {

  render() {


    const userName = localStorage.getItem('username');

    return (
        <div className="content">
          <h2 className="titlePage margin-bottom-40">Hello {userName}!</h2>
          <div className="BoxPosition">
            <SalesChartComponent/>
            <ReportChartComponent/>
            <BoxNotification>
              <header>
                <h3>Task</h3>
                <div className="NotificationIconBlock">
                  <span className="MainIconNotification">5</span>
                  <span className="MainIconNotification MainIconNotification--Complitive">2</span>
                </div>
              </header>
              <Task classTask="TaskBlock TaskBlockBox"
                    descriptionTask="New website for Symu.co"
                    descriptionTimeClass="TaskDelay"
                    descriptionTime="5 days delays"
              />

              <Task classTask="TaskBlock TaskBlockBox"
                    descriptionTask="Free business PSD Template"
                    descriptionTimeClass="TaskDelay"
                    descriptionTime="2 days delays"
              />
              <Task classTask="TaskBlock TaskBlockBox"
                    descriptionTask="New logo for JCD.pl"
                    descriptionTimeClass="TaskTimeLeft"
                    descriptionTime="5 days delays"
              />
              <Task classTask="TaskBlock TaskBlockBox"
                    descriptionTask="Free Icons Set vol. 3"
                    descriptionTimeClass="TaskTimeLeft"
                    descriptionTime="10 days delays"
              />
            </BoxNotification>
            <BoxNotification>
              <header>
                <h3>Messages</h3>
                <span className="MainIconNotification">2</span>
              </header>
              <Message messageBlockClass="MessageBlock NotReadMessage"
                       userIcon="img/user2.png"
                       nameUser="Nina Jones"
                       messageTime="5 minutes ago"
                       messageText="Hey You! It’s me again :-) I attached new(...)"
              />
              <Message messageBlockClass="MessageBlock NotReadMessage"
                       userIcon="img/user2.png"
                       nameUser="Nina Jones"
                       messageTime="About 20 hours ago"
                       messageText="Hey! I attached some new PSD files for(...)"
              />
              <Message messageBlockClass="MessageBlock"
                       userIcon="img/user3.png"
                       nameUser="James Smith"
                       messageTime="2 days ago"
                       messageText="Good morning, you are fired!"
              />
              <Message messageBlockClass="MessageBlock"
                       userIcon="img/user2.png"
                       nameUser="Nina Jones"
                       messageTime="About 2 weeks ago"
                       messageText="Hello! Could You bring me coffee"
              />
            </BoxNotification>
            <BoxNotification>
              <header>
                <h3>Activity</h3>
                <span className="MainIconNotification">10</span>
              </header>
              <Activity userIconActivity="img/user2.png"
                        userNameActivity="Nina Jones"
                        actionActivity="added a new project"
                        nameTaskActivity="Free UI Kit"
                        timeActivity="Just now"
              />
              <Activity userIconActivity="img/user3.png"
                        userNameActivity="James Smith"
                        actionActivity="commented project"
                        nameTaskActivity="Free PSD Template"
                        timeActivity="40 minutes ago"
              />
              <Activity userIconActivity="img/user4.png"
                        userNameActivity="Alex Clooney"
                        actionActivity="completed task"
                        nameTaskActivity="Symu Website"
                        timeActivity="1 hour ago"
              />
              <Activity userIconActivity="img/user5.png"
                        userNameActivity="Alexandra Spears"
                        actionActivity="added a new project"
                        nameTaskActivity="Free PSD (...)"
                        timeActivity="3 hours ago"
              />
            </BoxNotification>

          </div>
        </div>
    );
  }
}

export default Home;
