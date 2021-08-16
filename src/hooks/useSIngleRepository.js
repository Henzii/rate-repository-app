import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_SINGLE_REPOSITORY } from "../graphql/queries";

const useSingleRepository = (id) => {

    const [repository, setRepository ] = useState(null);
    
    const { loading, data } = useQuery(GET_SINGLE_REPOSITORY, { variables: { id }, fetchPolicy: 'cache-and-network'});

    useEffect( () => {
        if (!loading) {
            setRepository( data.repository);
        }
    }, [data, loading]);
    
    return repository;

};
export default useSingleRepository;
