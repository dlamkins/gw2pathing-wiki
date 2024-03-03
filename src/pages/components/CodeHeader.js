import React from 'react';
import PropTypes from 'prop-types';

const CLASS_COLOR = '#4a84de';
const FUNCTION_COLOR = '#ceb4e8';
const PARAM_COLOR = '#d3562e';
const PARENTHESES_COLOR = '#4a84de';

function span(color, str) {
    return <span style={{color: color}}>{str}</span>;
}

function CodeHeader(props) {
    const c = props.class;
    const f = props.function;
    const p = props.params;

    // Must have a class
    if (!c) return "Include a class prop in the CodeHeader component!"; 
    let cl_span = span(CLASS_COLOR, c);

    if (!f) return (<span>{cl_span}</span>);

    let f_span = null;
    let p_span = null;
    if (f !== null && f !== undefined && f !== "") {
        f_span = span(FUNCTION_COLOR, f);
        if (p !== null && p !== undefined && p !== "") {
            if (p.includes(",")) {
                let p_arr = p.split(", ");
                p_span = [];
                for (let i = 0; i < p_arr.length; i++) {
                    p_span.push(span(PARAM_COLOR, p_arr[i]));
                    if (i < p_arr.length - 1) {
                        p_span.push(", ");
                    }
                }
            }
            else {
                p_span = span(PARAM_COLOR, p);
            }
        }
    }


    return (
        <span>{cl_span}:{f_span}{span(PARENTHESES_COLOR, '(')}{p_span}{span(PARENTHESES_COLOR, ')')}</span>
    )
}

CodeHeader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CodeHeader;
