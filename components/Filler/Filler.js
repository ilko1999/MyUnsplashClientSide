import React, { useContext } from 'react'
import { CardContext } from '../../pages/api/context/CardProvider';
import Pictures from '../Pictures/Pictures';

function Filler() {
    const {filteredData} = useContext(CardContext);

    return (
        <div>
            <Pictures data={filteredData} />
        </div>
    )
}

export default Filler
