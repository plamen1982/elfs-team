import { FETCH_ELFS } from "./types";
import firebase from '../components/Firebase';

export const getAllElfs = () => dispatch => {
    const { db } = firebase;
    db.collection('teamElfs')
    .get()
    .then(querySnapshot => {
        const allElfs = [];
        querySnapshot.forEach(elf => {
            allElfs.push(elf.data());
        });
        dispatch({
            type: FETCH_ELFS,
            payload: allElfs
        });
    });
}