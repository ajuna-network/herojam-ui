"use client";

import { useSyncExternalStore } from "react";

interface InjectedWeb3 {
  [key: string]: unknown;
}

function subscribe(callback: () => void) {
  // If document is already loaded, we only need window.load listener
  if (document.readyState === "complete") {
    window.addEventListener("load", callback);
    return () => window.removeEventListener("load", callback);
  }

  // Document not loaded yet, listen for readystatechange
  const documentLoadCheck = () => {
    if (document.readyState === "complete") {
      console.log("Extensions checked on document load");
      callback();
      // Remove listener after it fires
      document.removeEventListener("readystatechange", documentLoadCheck);
    }
  };

  document.addEventListener("readystatechange", documentLoadCheck);

  // Initial check 
  if (window.injectedWeb3) callback();

  return () => {
    document.removeEventListener("readystatechange", documentLoadCheck);
  };
}

function getSnapshot() {
  return window?.injectedWeb3;
}

function getServerSnapshot() {
  return undefined;
}

export function useAvailableExtensions() {
  const injectedWeb3 = useSyncExternalStore<InjectedWeb3 | undefined>(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const availableExtensions = Object.keys(injectedWeb3 ?? {});
  const isExtensionAvailable = availableExtensions.length > 0;

  return {
    extensions: availableExtensions,
    isExtensionAvailable,
    injectedWeb3,
  };
}
