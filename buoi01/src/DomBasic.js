import React, { Component, useState } from 'react';

function DomBasic() {
    const [val, setVal] = useState('???')

    function handleChangeInput(e) {
        setVal(e.target.value)
    }

    return (
        <>
            <input onChange={handleChangeInput} type="text" id="fullname" /> <br />
            <h3>Giá trị nhập của user:{val}</h3>
        </>
    );
}

export default DomBasic;