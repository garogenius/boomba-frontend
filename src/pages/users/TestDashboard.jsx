import React, { useState } from "react";
import DashBody from "./DashBody";
import SiteBody from "./SiteBody";

const TestDashboard = () => {
  const [navOpen, setNavOpen] = useState(false);
  let nav = {
    open: "wf-flaticon-n4-inactive wf-lato-n7-inactive wf-lato-n3-inactive wf-lato-n4-inactive wf-fontawesome5solid-n4-active wf-fontawesome5regular-n4-active wf-simplelineicons-n4-active wf-fontawesome5brands-n4-active wf-lato-n9-inactive wf-active nav_open",
    close:
      "wf-flaticon-n4-inactive wf-lato-n7-inactive wf-lato-n3-inactive wf-lato-n4-inactive wf-fontawesome5solid-n4-active wf-fontawesome5regular-n4-active wf-simplelineicons-n4-active wf-fontawesome5brands-n4-active wf-lato-n9-inactive wf-active ", //topbar_open
  };

  const handleOpen = () => {
    setNavOpen(!navOpen);
  };
  return (
    <SiteBody>
      <DashBody />
    </SiteBody>
  );
};

export default TestDashboard;
