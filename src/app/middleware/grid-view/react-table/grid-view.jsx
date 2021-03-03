import React from 'react'

import columns from './grid-settings/column'
import Styled from './grid-settings/styled'
import Table from './grid-settings/table'

import makeData from '../make-data'

const GridView = () => {
    //örnek bir data
    const data = React.useMemo(() => makeData(2000), []);
    
    return (
        <Styled>
            <Table columns={columns} data={data} />
        </Styled>
    )
}

export default GridView;