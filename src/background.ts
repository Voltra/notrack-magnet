import browser, { Menus, Runtime, Tabs } from "webextension-polyfill";

const menuId = "notrack-magnet__removeTrackers";

const onClick = (info: Menus.OnClickData, tab: Tabs.Tab) => {
	browser.tabs.executeScript(tab.id, {
		file: "/content-script.js",
	});
};

browser.menus.create({
	id: menuId,
	title: "Remove magnet trackers on the page",
	contexts: ["all"],
});

browser.menus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case menuId:
			onClick(info, tab!);
			break;
	}
});
