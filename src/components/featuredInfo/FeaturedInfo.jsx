import React from 'react'
import './featuredInfo.css'
import { ArrowDownward, ArrowUpward }from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
	<div className='featured'>
		<div className="featuredItem">
			<span className="featuredTitle">Revenue</span>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">$2,400</span>
				<span className="featuredMoneyRate">
					-12.5 <ArrowDownward className='featuredIcon negative'/>
				</span>
			</div>
			<span className="featuredSub">Compare to last Month</span>
		</div>
		<div className="featuredItem">
			<span className="featuredTitle">Sales</span>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">$4,500</span>
				<span className="featuredMoneyRate">
					-2.5 <ArrowDownward className='featuredIcon negative'/>
				</span>
			</div>
			<span className="featuredSub">Compare to last Month</span>
		</div>
		<div className="featuredItem">
			<span className="featuredTitle">Cost</span>
			<div className="featuredMoneyContainer">
				<span className="featuredMoney">$2,345</span>
				<span className="featuredMoneyRate">
					+3.8 <ArrowUpward className='featuredIcon'/>
				</span>
			</div>
			<span className="featuredSub">Compare to last Month</span>
		</div>
	</div>
  )
}
