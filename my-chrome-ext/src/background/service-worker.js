chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ appStatus: "instalado" });
  console.log("Extensão instalada com sucesso!");
});