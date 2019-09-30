import React, { useEffect, useState } from "react";
import { getAllElfs } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const { allElfs } = useSelector(state => state.data );
    debugger;
    useEffect(() => {
        dispatch(getAllElfs());
    }, [])
    return (
        <div>
        {allElfs.map(elf => { 
          return (
            <>
                <div>Name: {elf.name}</div>
                <div>Super power: {elf.superPower}</div>
            </>
            )
        })}
        </div>
    );
}

export default Home;