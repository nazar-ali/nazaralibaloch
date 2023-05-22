import React from 'react'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Login from '../src/';
import Home from '../pages/Home';

export default function App() {
    const API_URL = 'http://localhost:3000/user';
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.pathame)
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await fetch(API_URL);
                const listItem = await resp.json();
                // console.log(listItem);
                setData(listItem);
            } catch (err) {
                console.log(err.stack);
            }
        }

        (async () => await getData())();
    }, [])

    //TODO: if user exist then navigate to the pages, else navigate to login
    useEffect(() => {
        const user = localStorage.getItem("items")
        if (location.pathname === '/login' && !!user) {
            navigate('/home');
        } else if (location.pathname !== '/login' && !user) {
            navigate('/login');
        }
    }, [location.pathname])

    return (
        <Routes>
            <Route path="/login" element={<Login data={data} />} />
            <Route path="/home" element={<Home data={data} />} />
        </Routes>
    )
}
