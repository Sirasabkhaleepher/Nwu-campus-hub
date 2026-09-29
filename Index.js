import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import Link from 'next/link'

export default function Home() {
  const [handouts, setHandouts] = useState([])
  useEffect(() => {
    supabase.from('handouts').select('*').order('created_at', {ascending:false}).then(({data}) => setHandouts(data || []))
  }, [])
  return (
    <div style={{fontFamily:'sans-serif', maxWidth:800, margin:'0 auto', padding:20}}>
      <h1 style={{color:'#0a3d62'}}>Northwest Campus Hub</h1>
      <p>Official portal for lecture notes, handouts & announcements</p>
      <div style={{display:'flex', gap:10, margin:'20px 0'}}>
        <Link href="/student"><button>Student Login</button></Link>
        <Link href="/admin"><button>Admin Panel</button></Link>
      </div>
      <h2>Latest Handouts</h2>
      {handouts.map(h => (
        <div key={h.id} style={{border:'1px solid #ddd', padding:15, margin:'10px 0', borderRadius:8}}>
          <h3>{h.title}</h3>
          <p>{h.course_code} - {h.lecturer}</p>
          <a href={h.file_url} target="_blank" download><button>Download PDF</button></a>
        </div>
      ))}
    </div>
  )
  }
