import React from 'react';

const Grid = (props) => {
	const gridContainer = (prop) => props.container ? 'grid--container' : '';
	const gridMatchHeight = (prop) => props.matchHeight ? 'grid--match-height' : '';
	
	// grid columns
	const gridColsXs = (prop) => props.colsXs ? `grid--cols-xs${prop}` : '';
	const gridColsSm = (prop) => props.colsSm ? `grid--cols-sm${prop}` : '';
	const gridColsMd = (prop) => props.colsMd ? `grid--cols-md${prop}` : '';
	const gridColsLg = (prop) => props.colsLg ? `grid--cols-lg${prop}` : '';
	const gridColsXl = (prop) => props.colsXl ? `grid--cols-xl${prop}` : '';
	const gridCols = (prop) => props.cols ? `grid--cols-${prop}` : '';

	// grid gaps
	const gridGapXs = (prop) => props.gapXs ? `grid--gap-xs${prop}` : '';
	const gridGapSm = (prop) => props.gapSm ? `grid--gap-sm${prop}` : '';
	const gridGapMd = (prop) => props.gapMd ? `grid--gap-md${prop}` : '';
	const gridGapLg = (prop) => props.gapLg ? `grid--gap-lg${prop}` : '';
	const gridGapXl = (prop) => props.gapXl ? `grid--gap-xl${prop}` : '';
	const gridGap = (prop) => props.gap ? `grid--gap-${prop}` : '';

	// grid row gaps
	const gridXGapXs = (prop) => props.xGapXs ? `grid--gap-x-xs${prop}` : '';
	const gridXGapSm = (prop) => props.xGapSm ? `grid--gap-x-sm${prop}` : '';
	const gridXGapMd = (prop) => props.xGapMd ? `grid--gap-x-md${prop}` : '';
	const gridXGapLg = (prop) => props.xGapLg ? `grid--gap-x-Lg${prop}` : '';
	const gridXGapXl = (prop) => props.xGapXl ? `grid--gap-x-xl${prop}` : '';
	
	// grid row gaps
	const gridYGapXs = (prop) => props.yGapXs ? `grid--gap-y-xs${prop}` : '';
	const gridYGapSm = (prop) => props.yGapSm ? `grid--gap-y-sm${prop}` : '';
	const gridYGapMd = (prop) => props.yGapMd ? `grid--gap-y-md${prop}` : '';
	const gridYGapLg = (prop) => props.yGapLg ? `grid--gap-y-Lg${prop}` : '';
	const gridYGapXl = (prop) => props.yGapXl ? `grid--gap-y-xl${prop}` : '';

	return (
		<div
			className={`grid ${gridContainer(props.container)} ${gridMatchHeight(props.matchHeight)} ${gridCols(props.cols)} ${gridColsXs(props.colsXs)} ${gridColsSm(props.colsSm)} ${gridColsMd(props.colsMd)} ${gridColsLg(props.colsLg)} ${gridColsXl(props.colsXl)} ${gridGap(props.gap)} ${gridGapXs(props.gapXs)} ${gridGapSm(props.gapSm)} ${gridGapMd(props.gapMd)} ${gridGapLg(props.gapLg)} ${gridGapXl(props.gapXl)} ${gridXGapXs(props.xGapXs)} ${gridXGapSm(props.xGapSm)} ${gridXGapMd(props.xGapMd)} ${gridXGapLg(props.xGapLg)} ${gridXGapXl(props.xGapXl)} ${gridYGapXs(props.yGapXs)} ${gridYGapSm(props.yGapSm)} ${gridYGapMd(props.yGapMd)} ${gridYGapLg(props.yGapLg)} ${gridYGapXl(props.yGapXl)} ${props.className ? props.className : ''}`}
		>
			{ props.children || '' }
		</div>
	)
}

export default Grid;