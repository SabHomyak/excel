import React from "react";
import RowContainer from "../Row/RowContainer";
import {connect} from "react-redux";
import {setActiveCell, setDataState, setFormula} from "../../../redux/tableReducer";


const Rows = ({size, dataState, ...props}) => (<>
        {generateRows(size, dataState, props)}
    </>
)
const mapStateToProps = (state) => ({
    cols: state.colState,
    rowSize: state.rowState,
    dataState: state.dataState
})
export default connect(mapStateToProps, {
    setActiveCell,
    setDataState,
    setFormula
})(Rows)


const generateRows = (size, dataState, props) => {
    const rows = Array(size).fill('').map((_, index) => {
        const rowDataState = props.getRowState(dataState, index)
        return <RowContainer
            key={index}
            index={index}
            dataState={rowDataState}
            {...props}
        />
    })
    return rows
}