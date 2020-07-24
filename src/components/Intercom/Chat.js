import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Button } from "./Button";

/**
 * Wait for the global variable window.Intercom and the load it
 * @param {object} data
 */
const waitForIntercomGlobal = (data) => {
  if (window.Intercom) {
    window.intercomSettings = data;
    window.Intercom("boot");
    window.Intercom("show");
  } else {
    setTimeout(() => {
      waitForIntercomGlobal(data);
    }, 50);
  }
};

/**
 * Load script
 */
const loadScript = ({ appId }) => {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = `https://widget.intercom.io/widget/${appId}`;
    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  });
};

export const Chat = () => {
  const context = useDocusaurusContext();
  const appId = context.siteConfig?.themeConfig?.intercom?.appId;

  if (!appId) {
    return null;
  }

  const [isLoaded, setIsLoaded] = useState(false); // Is window.Intercom loaded
  const [isMounted, setIsMounted] = useState(false); // Has the component mounted
  const [loadTriggered, setLoadTriggered] = useState(false); // Has a load of Intercom scripts been triggered

  // Intercom requires dom manipulation
  const canUseDOM = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (loadTriggered && canUseDOM && !isLoaded) {
      loadScript(appId).then(() => {
        const data = { app_id: appId };
        waitForIntercomGlobal(data);
        setIsLoaded(true);
      });
    }
  }, [loadTriggered, canUseDOM, isLoaded]);

  if (isMounted) {
    if (appId && canUseDOM) {
      if (!loadTriggered) {
        return <Button onClick={() => setLoadTriggered(true)} />;
      }
    }
  }

  return null;
};
