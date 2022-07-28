import React from 'react';
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Topbar() {
	return (
		<div>
			<div className="topbar">
				<div className="topbarWrapper">
					<div className="topLeft">
						<span className="logo">venkadmin</span>
					</div>
					<div className="topRight">
						<div className="topbarIcons">
							<NotificationsNoneIcon/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}