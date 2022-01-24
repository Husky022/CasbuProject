import React from 'react'
import {useParams} from "react-router-dom";


const NoteItem = ({note}) => {
   return (
       <tr>
           <td>
               {note.id}
           </td>
           <td>
               {note.text}
           </td>
           <td>
               {note.project}
           </td>
           <td>
               {note.creator}
           </td>
       </tr>
   )
}

const NoteList = ({notes}) => {
   let { id } = useParams();
   let filtered_notes = notes.filter((note) => note.creator.id === id)
   // let filtered_items = items.filter((item) => item.author.id == id)
   return (
       <div className="content-wrapper">
           <table>
               <th>
                   ID
               </th>
               <th>
                   Text
               </th>
               <th>
                   Project
               </th>
               <th>
                   Creator
               </th>
               {/*{notes.map((note) => <NoteItem note={note} />)}*/}
               {filtered_notes.map((note) => <NoteItem note={note} />)}
           </table>
       </div>
   )
}


export default NoteList