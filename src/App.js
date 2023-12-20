import "./App.css";
import GenericModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import { useContext, useEffect } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { getCollabedHelpComponentConfig } from "./lib";
import { getLibDescribe, getLibVersion, isDirty } from "./version";
function App() {
  const version = "0.test.0";
  const reactCismapRHMVersion = "0.test.0";
  const footerLogoUrl = undefined;
  const email = "starkregen@cismet.de";
  const { setAppMenuVisible } = useContext(UIDispatchContext);
  useEffect(() => {
    setAppMenuVisible(true);
  }, [setAppMenuVisible]);
  return (
    <div>
      {"@cismet-collab/ais-generic-texts@" +
        getLibVersion() +
        (isDirty()
          ? " (dirty: release before usage[" + getLibDescribe() + "])"
          : "(ready to use)")}
      <GenericModalApplicationMenu
        {...getCollabedHelpComponentConfig({
          version,
          reactCismapRHMVersion,
          footerLogoUrl,
          email,
        })}
      />
    </div>
  );
}

export default App;
