// types/dashboard.ts
export interface MenuItem {
	id: string;
	label: string;
	icon?: React.ReactNode;
	path: string;
	disabled?: boolean;
}

export interface Hub {
	id: string;
	title: string;
	disabled: boolean;
	menuItems: MenuItem[];
}

export type HubType =
	| "overview"
	| "web"
	| "marketing"
	| "social"
	| "sales"
	| "hr"
	| "inventory"
	| "finance";

export const hubConfigs: Record<HubType, Hub> = {
	overview: {
		id: "overview",
		title: "Overview",
		disabled: false,
		menuItems: [
			{
				id: "1",
				label: "Analytics",
				path: "/dashboard/analytics",
				disabled: false
			},
			{
				id: "2",
				label: "Settings",
				path: "/dashboard/settings",
				disabled: false
			},
			{ id: "3", label: "Users", path: "/dashboard/users", disabled: false },
			{ id: "4", label: "Billing", path: "/dashboard/billing", disabled: false }
		]
	},
	web: {
		id: "web",
		title: "Web Hub",
		disabled: false,
		menuItems: [
			{ id: "1", label: "Dashboard", path: "/web", disabled: false },
			{ id: "2", label: "Sites", path: "/web/sites", disabled: false },
			{ id: "3", label: "Analytics", path: "/web/analytics", disabled: false },
			{ id: "4", label: "Content", path: "/web/content", disabled: false },
			{ id: "5", label: "SEO", path: "/web/seo", disabled: false }
		]
	},
	marketing: {
		id: "marketing",
		title: "Marketing Hub",
		disabled: true,
		menuItems: [
			{
				id: "1",
				label: "Campaigns",
				path: "/marketing/campaigns",
				disabled: false
			},
			{ id: "2", label: "Leads", path: "/marketing/leads", disabled: false },
			{
				id: "3",
				label: "Analytics",
				path: "/marketing/analytics",
				disabled: false
			},
			{ id: "4", label: "Email", path: "/marketing/email", disabled: false },
			{ id: "5", label: "Ads", path: "/marketing/ads", disabled: false }
		]
	},
	social: {
		id: "social",
		title: "Social Hub",
		disabled: false,
		menuItems: [
			{ id: "1", label: "Posts", path: "/social/posts", disabled: false },
			{ id: "2", label: "Schedule", path: "/social/schedule", disabled: false },
			{
				id: "3",
				label: "Analytics",
				path: "/social/analytics",
				disabled: false
			},
			{
				id: "4",
				label: "Engagement",
				path: "/social/engagement",
				disabled: false
			},
			{ id: "5", label: "Profiles", path: "/social/profiles", disabled: false }
		]
	},
	sales: {
		id: "sales",
		title: "Sales Hub",
		disabled: true,
		menuItems: [
			{ id: "1", label: "Deals", path: "/sales/deals", disabled: false },
			{ id: "2", label: "Contacts", path: "/sales/contacts", disabled: false },
			{ id: "3", label: "Pipeline", path: "/sales/pipeline", disabled: false },
			{ id: "4", label: "Reports", path: "/sales/reports", disabled: false },
			{ id: "5", label: "Tasks", path: "/sales/tasks", disabled: false }
		]
	},
	hr: {
		id: "hr",
		title: "HR Hub",
		disabled: true,
		menuItems: [
			{ id: "1", label: "Employees", path: "/hr/employees", disabled: false },
			{
				id: "2",
				label: "Recruitment",
				path: "/hr/recruitment",
				disabled: false
			},
			{ id: "3", label: "Payroll", path: "/hr/payroll", disabled: false },
			{ id: "4", label: "Time", path: "/hr/time", disabled: false },
			{ id: "5", label: "Benefits", path: "/hr/benefits", disabled: false }
		]
	},
	inventory: {
		id: "inventory",
		title: "Inventory Hub",
		disabled: true,
		menuItems: [
			{
				id: "1",
				label: "Products",
				path: "/inventory/products",
				disabled: false
			},
			{ id: "2", label: "Stock", path: "/inventory/stock", disabled: false },
			{ id: "3", label: "Orders", path: "/inventory/orders", disabled: false },
			{
				id: "4",
				label: "Suppliers",
				path: "/inventory/suppliers",
				disabled: false
			},
			{ id: "5", label: "Reports", path: "/inventory/reports", disabled: false }
		]
	},
	finance: {
		id: "finance",
		title: "Finance Hub",
		disabled: true,
		menuItems: [
			{
				id: "1",
				label: "Accounts",
				path: "/finance/accounts",
				disabled: false
			},
			{
				id: "2",
				label: "Invoices",
				path: "/finance/invoices",
				disabled: false
			},
			{
				id: "3",
				label: "Expenses",
				path: "/finance/expenses",
				disabled: false
			},
			{ id: "4", label: "Reports", path: "/finance/reports", disabled: false },
			{ id: "5", label: "Budget", path: "/finance/budget", disabled: false }
		]
	}
};
