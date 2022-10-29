import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Announcements from "../components/Announcements";

import Lessons from "../components/Lessons";
import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Sidebar from "../components/Sidebar";

const TeacherDashboard = () => {
    const [teacher, setteacher] = useState(true);
    const [path, setpath] = useState(true);
    const route = useSelector(state => {
        console.log("burası", state.router.default)

    })
    return <div className="flex">
        <div className="flex-col w-1/4">
            {/* <Navbar /> */}
            <Sidebar path={path} setpath={setpath} teacher={teacher} />
        </div>


        <div className="w-3/4 justify-center items-center ">
            {/* <Profil /> */}
            {


                path === "info" ? <Profil /> : path === "program" ? <Lessons /> : path === "announcement" ? <Announcements /> : "s"


            }

        </div>

    </div>;
};

export default TeacherDashboard;
