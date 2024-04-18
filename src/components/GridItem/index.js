import React from 'react';

const GridItem = (props) => {
	// grid item column span
	const gridColumnSpan = (prop) => props.colSpan ? `grid__item--col-span-${prop}` : '';
	const gridColumnSpanXs = (prop) => props.colSpanXs ? `grid__item--col-span-xs${prop}` : '';
	const gridColumnSpanSm = (prop) => props.colSpanSm ? `grid__item--col-span-sm${prop}` : '';
	const gridColumnSpanMd = (prop) => props.colSpanMd ? `grid__item--col-span-md${prop}` : '';
	const gridColumnSpanLg = (prop) => props.colSpanLg ? `grid__item--col-span-lg${prop}` : '';
	const gridColumnSpanXl = (prop) => props.colSpanXl ? `grid__item--col-span-xl${prop}` : '';

	// grid item column start/end
	const gridColStart = (prop) => props.colStart ? `grid__item--col-start-${prop}` : '';
	const gridColEnd = (prop) => props.colEnd ? `grid__item--col-end-${prop}` : '';
	// const gridColStartXs = (prop) => props.colStartXs ? `grid__item--col-start-xs${prop}` : '';

	return (
		<div
			className={`grid__item ${gridColumnSpan(props.colSpan)} ${gridColumnSpanXs(props.colSpanXs)} ${gridColumnSpanSm(props.colSpanSm)} ${gridColumnSpanMd(props.colSpanMd)} ${gridColumnSpanLg(props.colSpanLg)} ${gridColumnSpanXl(props.colSpanXl)} ${gridColStart(props.colStart)} ${gridColEnd(props.colEnd)} ${props.className ? props.className : ''}`}
		>
			{ props.children || '' }
		</div>
	)
}

export default GridItem;