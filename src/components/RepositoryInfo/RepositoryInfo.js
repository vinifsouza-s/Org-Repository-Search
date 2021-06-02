import React from 'react';

const RepositoryInfo = (props) => {
    const { repos } = props;
    console.log("Repos is:" , repos.data)

    const listRepos = 
        repos.length !==0 ? ( 
        repos.data.map((item) => <li key={item.id}>{item.name}</li> )
    ) : (
        <li>Diretorio não encontrado</li>
    );

    return (
        <ul>
            {listRepos}
        </ul>
    );
};

export default RepositoryInfo;
