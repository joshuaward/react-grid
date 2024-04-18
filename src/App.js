import React, { useEffect, useState } from 'react';

// components
import Grid from './components/Grid';
import GridItem from './components/GridItem';

const gridData12 = [
    { id: 1, text: 'Grid Item' },
    { id: 2, text: 'Grid Item' },
    { id: 3, text: 'Grid Item' },
    { id: 4, text: 'Grid Item' },
    { id: 5, text: 'Grid Item' },
    { id: 6, text: 'Grid Item' },
    { id: 7, text: 'Grid Item' },
    { id: 8, text: 'Grid Item' },
    { id: 9, text: 'Grid Item' },
    { id: 10, text: 'Grid Item' },
    { id: 11, text: 'Grid Item' },
    { id: 12, text: 'Grid Item' }
]

function App() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    // const randomNumber = (min, max) => {
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }

    useEffect(() => {
        const handleResize = () => setWindowSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [windowSize]);

    return (
        <>
            <div className="container">
                <h3>Grids with a Container</h3>
                <hr />
            </div>



			<Grid
                container
                colsXs={ 4 } colsSm={ 6 } colsMd={ 8 } colsLg={ 10 } colsXl={ 12 }
                gapXs={ '05' } gapSm={ '1' } gapMd={ '2' }
                className="example"
            >
                {gridData12.map((item, index) => (
                    <GridItem
                        className=""
                        key={ index }
                    >
                        {index + 1}
                    </GridItem>
                ))}
			</Grid>

            <div className="container">
                <h5>(1) grid item spanning 12 columns</h5>
            </div>

            <Grid
                container
                cols={ 12 }
                className="example"
            >
                {gridData12.slice(0, 1).map((item, index) => (
                    <GridItem
                        colSpan={ 12 }
                        key={ index }
                    >
                       {index + 1} of {gridData12.slice(0, 1).length}
                    </GridItem>
                ))}
            </Grid>

            <div className="container">
                <hr />
                <h5>(2) grid items each spanning 6 columns</h5>
            </div>

            <Grid
                container
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 2).map((item, index) => (
                    <GridItem
                        colSpan={ 6 }
                        key={ index }
                    >
                       {index + 1} of {gridData12.slice(0, 2).length}
                    </GridItem>
                ))}
            </Grid>

            <div className="container">
                <hr />
                <h5>(3) grid items each spanning 4 columns</h5>
            </div>
            
            <Grid
                container
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 3).map((item, index) => (
                    <GridItem
                        colSpan={ 4 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.slice(0, 3).length}
                    </GridItem>
                ))}
            </Grid>

            <div className="container">
                <hr />
                <h5>(4) grid items each spanning 3 columns</h5>
            </div>
            
            <Grid
                container
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 4).map((item, index) => (
                    <GridItem
                        colSpan={ 3 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.slice(0, 4).length}
                    </GridItem>
                ))}
            </Grid>

            <div className="container">
                <hr />
                <h5>(6) grid items each spanning 2 columns</h5>
            </div>
            
            <Grid
                container
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 6).map((item, index) => (
                    <GridItem
                        colSpan={ 2 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.slice(0, 6).length}
                    </GridItem>
                ))}
            </Grid>

            <div className="container">
                <hr />
                <h5>(12) grid items each spanning 2 columns</h5>
            </div>
            
            <Grid
                container
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.map((item, index) => (
                    <GridItem
                        colSpan={ 1 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.length}
                    </GridItem>
                ))}
            </Grid>
            
            {/* NO CONTAINER GRIDS */}

            <div className="container">
                <hr />
                <h3>Full Width Grids with No Container</h3>
            </div>
            
            <Grid
                cols={ 12 }
                className="example"
            >
                {gridData12.slice(0, 1).map((item, index) => (
                    <GridItem
                        colSpan={ 12 }
                        key={ index }
                    >
                       {index + 1} of {gridData12.slice(0, 1).length}
                    </GridItem>
                ))}
            </Grid>

            <Grid
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 2).map((item, index) => (
                    <GridItem
                        colSpan={ 6 }
                        key={ index }
                    >
                       {index + 1} of {gridData12.slice(0, 2).length}
                    </GridItem>
                ))}
            </Grid>
            
            <Grid
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 3).map((item, index) => (
                    <GridItem
                        colSpan={ 4 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.slice(0, 3).length}
                    </GridItem>
                ))}
            </Grid>
            
            <Grid
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 4).map((item, index) => (
                    <GridItem
                        colSpan={ 3 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.slice(0, 4).length}
                    </GridItem>
                ))}
            </Grid>
            
            <Grid
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.slice(0, 6).map((item, index) => (
                    <GridItem
                        colSpan={ 2 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.slice(0, 6).length}
                    </GridItem>
                ))}
            </Grid>
            
            <Grid
                cols={ 12 }
                gap={ 1 }
                className="example"
            >
                {gridData12.map((item, index) => (
                    <GridItem
                        colSpan={ 1 }
                        key={ index }
                    >
                        {index + 1} of {gridData12.length}
                    </GridItem>
                ))}
            </Grid>

            {/* <Grid
                container
                colsXs={ 4 } colsSm={ 6 } colsMd={ 10 }
                gap={ '05'  }
                className="example"
            >
                {gridData12.slice(0, 10).map((item, index) => (
                    <GridItem 
                        colSpanXs={ randomNumber(1, 4) } colSpanSm={ randomNumber(1, 6) } colSpanMd={ randomNumber(1, 10) }
                        className=""
                        key={ index }
                    >
                        {item.text} {index + 1}
                    </GridItem>
                ))}
            </Grid> */}
		</>
    );
}

export default App;
