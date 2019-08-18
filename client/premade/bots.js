import React, { Component } from "react";
import Status from "./../utils/status.js";
import PercentBar from "./../utils/percentBar.js";
import { MemberList } from "./../utils/members.js";

class Bots extends Component {
  render() {
    return (
      <React.Fragment>
        <b className="title right">Bots</b>
        <PercentBar
          serverId="480959345601937410"
          searchForMembers={[
            "499262934715727872", // Chromebot
            "555361766947815424", // Chromebot Canary
            "587060114318688256", // Chromebot ModMail
            "599743179608293398" // Chromebot manager
            //"317731855317336067", // Minion3665 (for testing only)
          ]}
        />
        <div className="centerContainer">
          <Status
            botName="Chromebot"
            botId="499262934715727872"
            serverId="480959345601937410"
          />
          <Status
            botName="Chromebot Canary"
            botId="555361766947815424"
            serverId="480959345601937410"
          />
        </div>
        <div className="centerContainer">
          <Status
            botName="Chromebot ModMail"
            botId="587060114318688256"
            serverId="480959345601937410"
          />
          <Status
            botName="Chromebot Manager"
            botId="599743179608293398"
            serverId="480959345601937410"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Bots;
