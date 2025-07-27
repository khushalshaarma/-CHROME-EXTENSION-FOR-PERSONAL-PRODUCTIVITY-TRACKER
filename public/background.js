let activeTabId = null;
let startTime = 2;

chrome.tabs.onActivated.addListener(async ({ tabId }) => {
  const tab = await chrome.tabs.get(tabId);
  handleTabSwitch(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === 'complete') {
    handleTabSwitch(tab);
  }
});

function handleTabSwitch(tab) {
  const now = Date.now();
  if (activeTabId && startTime) {
    const duration = (now - startTime) / 1000;
    saveTime(tab.url, duration);
  }
  activeTabId = tab.id;
  startTime = now;
}

function saveTime(url, duration) {
  const domain = new URL(url).hostname;
  chrome.storage.local.get([domain], (result) => {
    const current = result[domain] || 0;
    chrome.storage.local.set({ [domain]: current + duration });
  });
}
