import '../cssModals/sideBar.css'
import { useState, useEffect } from 'react'

export default function SideBar({ data, setFilter, setSearch, search = '' }) {
  const [sidebarHidden, setSidebarHidden] = useState(false)
  const [tags, setTags] = useState([])

  useEffect(() => {
    if (!data) return
    const allTags = [...new Set(data.flatMap(obj => obj.tags))]
    setTags(allTags)
  }, [data])

  useEffect(() => {
    console.log(tags)
  }, [tags])

  return (
    <>
      <div className={`sideBarPopUpButton ${!sidebarHidden ? 'hidden' : ''}`} onClick={() => setSidebarHidden(!sidebarHidden)}>
        <img src="/filter.svg" height={'50px'} width={'50px'} alt="" />
      </div>
      <div className={sidebarHidden ? "sideBarBox hidden" : "sideBarBox"}>
      <div className="closeButtonBox">
      <button onClick={() => setFilter(false)}>No filter</button>
      <button className='close' onClick={() => setSidebarHidden(!sidebarHidden)}>
        ✖️
      </button>
        </div>
        <h3>Sort by</h3>
        <input placeholder='🔎' type="text" onChange={(e) => setSearch(e.target.value)} />
        {tags.sort((a, b) => a.localeCompare(b))
        .filter(tag => tag.includes(search))
        .map(tag => (
          <button onClick={() => {
            setFilter(tag)
          }} key={tag}>
            {tag}
          </button>
        ))}
      </div>
    </>
  )
}