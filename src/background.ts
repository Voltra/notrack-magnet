import browser, { Menus, Runtime, Tabs } from "webextension-polyfill";

const menuId = "notrack-magnet__removeTrackers";

const onClick = (tab: Tabs.Tab) => {
	browser.tabs.executeScript(tab.id, {
		file: "/content-script.js",
	});
};

browser.menus.create({
	id: menuId,
	title: "Remove magnet trackers on the page",
	contexts: ["all"],
	icons: {
		"16": "/assets/notrack-magnet.svg",
		"48": "/assets/notrack-magnet.svg",
		"64": "/assets/notrack-magnet.svg",
		"96": "/assets/notrack-magnet.svg",
		"128": "/assets/notrack-magnet.svg"
	},
});

browser.menus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case menuId:
			onClick(tab!);
			break;
	}
});

browser.action.onClicked.addListener(tab => {
	onClick(tab);
});
