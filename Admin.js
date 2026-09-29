import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Admin() {
  const [title, setTitle] = useState(''); const [course, setCourse] = useState(''); const [url, setUrl] = useState('')
  const upload = async () => {
    const { error } = await supabase.from('handouts').insert([{ title, course_code: course, file_url: url, lecturer: 'Admin' }])
    if(!error) alert('Handout Uploaded!'); else alert(error.message)
  }
  return (
    <div style={{maxWidth:600, margin:'0 auto', padding:20}}>
      <h1>Admin Dashboard - Northwest Campus Hub</h1>
      <p>Upload new handout (upload PDF to Google Drive, copy link and paste here)</p>
      <input placeholder="Title e.g GST 101 Note" value={title} onChange={e=>setTitle(e.target.value)} style={{width:'100%', padding:10, margin:'10px 0'}}/>
      <input placeholder="Course Code e.g CSC 201" value={course} onChange={e=>setCourse(e.target.value)} style={{width:'100%', padding:10, margin:'10px 0'}}/>
      <input placeholder="File Link (Google Drive / Dropbox link)" value={url} onChange={e=>setUrl(e.target.value)} style={{width:'100%', padding:10, margin:'10px 0'}}/>
      <button onClick={upload} style={{padding:'10px 20px', background:'#0a3d62', color:'#fff'}}>Upload Handout</button>
    </div>
  )
}
