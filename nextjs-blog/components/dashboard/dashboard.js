import Dash from './dash.js'
import styles from './dashboard.module.sass'
import apiCall from './apiCall.js'
import readme from './readme.js'
import Info from '../info/info.js'
import {useEffect, useState} from 'react'

export default function Dashnoard(props){

    const [data, setData] = useState([])

    useEffect(async ()=> {
        try {
           const res = await apiCall("/api/dashboard/readDocument/userNames");

           setData(res);

        } catch(err){
            console.log(err)
        }
    }, [])

    return <>
        <main className={styles.container}>
            
            <Dash data={data}/>

            <Info text={readme}/>
        </main>
    </>
}