import React, { useState } from 'react'
import DeleteProject from "./DeleteProjects"
import swal from 'sweetalert';
import { FaTrash } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import EditProject from './EditProject';
import UpdateProject from "./UpdateProject"
export default function ProjectList({ projects, id, name, description }) {

    const getDeleteAlert = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this project!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    DeleteProject({ id });
                    swal("Poof! Your project has been deleted!", {
                        icon: "success",
                    });
                    setTimeout(() => window.location.reload(), 1500);
                }
                else {
                    swal("Your project is safe!");
                }
            });
    }

    const getEditProjectPop = () => {

        console.log({ id, name, description });

        EditProject({id});
    }

    return (

        <div className="card text-center h-100">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            <UpdateProject projectId={id}/>
                 {/* <button onClick={() => UpdateProject({id})} className="btn btn-outline-info my-2 my-sm-0" type="submit">Edit  <RiEdit2Line /> </button>  */}
                <button onClick={() => getDeleteAlert()} className="btn btn-outline-danger my-2 my-sm-0 m-2" type="submit">Delete <FaTrash />  </button>
            </div>
        </div>

    )
}
