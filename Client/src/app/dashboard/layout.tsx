import React from "react";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	return (
		<div className="dashboard-layout">
			<header className="dashboard-header">
				<h1>Dashboard</h1>
			</header>
			<aside className="dashboard-sidebar">
				<nav>
					<ul>
						<li>
							<a href="/dashboard">Home</a>
						</li>
						<li>
							<a href="/dashboard/settings">Settings</a>
						</li>
						<li>
							<a href="/dashboard/profile">Profile</a>
						</li>
					</ul>
				</nav>
			</aside>
			<main className="dashboard-content">{children}</main>
			<footer className="dashboard-footer">
				<p>&copy; 2023 IgniteHub</p>
			</footer>
		</div>
	);
};

export default DashboardLayout;
