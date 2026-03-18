import { useState, useCallback } from "react";
import ProfilePicture from "../ProfilePicture";
import Title from "../Title";
import PanelSelector from "../PanelSelector";
import MainPanel from "../MainPanel";

const Panels: React.FC = () => {
  const [activePanel, setActivePanel] = useState("work");

  const retrieveActivePanel = useCallback((panel: string) => {
    return setActivePanel(panel);
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-3xl h-full gap-6">
      <ProfilePicture />
      <Title />
      <PanelSelector
        activeOption={retrieveActivePanel}
        currentPanel={activePanel}
      />
      <MainPanel panel={activePanel} />
    </div>
  );
};

export default Panels;
