import React, { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../Services/api';

import './styles.css'
import logo from '../../assets/logo.svg';

export default function Profiler(){
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        api.get('profile', { 
            headers : { Authorization : ongId }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);


    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers :{ 
                    Authorization : ongId
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id ));

        } catch (error) {
            alert('Erro ao deletar o item, detalhes: ', error);
        }
    }

    function handleLogOut(){
        localStorage.clear();
        history.push('/');
    }
    
    return(
        <div className="profile-container">
            <header>
                <img src={logo}  alt="Be the Hero"/>
                <span>Seja bem vinda, {ongName}.</span>
                <Link className="button" to="/new/incident">cadastrar novo Cadastro</Link>
                <button type="button" onClick={handleLogOut}>
                    <FiPower  size={18} color="#e02041" />
                </button>
            </header>
            <h1> Casos cadastrados:</h1>
            <ul>
                {incidents.map(incident =>(
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.title}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor :</strong>
                        <p>{ Intl.NumberFormat('pt-BR', { style : 'currency', currency : 'BRL'}).format( incident.value ) } </p>
                        <button type="button" onClick={() => handleDeleteIncident(incident.id)} >
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
    
}