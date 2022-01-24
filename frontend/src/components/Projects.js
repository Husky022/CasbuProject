import React from 'react'
import { useParams } from 'react-router-dom'


const ProjectItem = ({project}) => {
   return (
       <tr>
           <td>
               {project.id}
           </td>
           <td>
               {project.name}
           </td>
           <td>
               {project.repo_link}
           </td>
       </tr>
   )
}

export const ProjectList = ({projects}) => {
   return (
       <div className="content-wrapper">
           <table>
               <th>
                   ID
               </th>
               <th>
                   Name
               </th>
               <th>
                   Link
               </th>
               {projects.map((project) => <ProjectItem project={project} />)}
           </table>
       </div>
   )
}

export const UserProjectList = ({projects}) => {
   let { id } = useParams();
   let filtered_projects = projects.filter((project) => id in project.users)
   return (
       <div className="content-wrapper">
           <table>
               <th>
                   ID
               </th>
               <th>
                   Name
               </th>
               <th>
                   Link
               </th>
               {filtered_projects.map((project) => <ProjectItem project={project} />)}
           </table>
       </div>
   )
}


