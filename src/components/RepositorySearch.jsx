import React from "react";
import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from "use-debounce/lib";

const RepositorySeatch = ({ handleSearch }) => {

    const debounced = useDebouncedCallback((value) => {
        handleSearch(value);
    }, 500 );
    return (
            <Searchbar onChangeText={(e) => { debounced(e); } }/>
    );
};
export default RepositorySeatch;