import React from 'react'


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
   return (
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
           {notes.map((note) => <NoteItem note={note} />)}
       </table>
   )
}


export default NoteList