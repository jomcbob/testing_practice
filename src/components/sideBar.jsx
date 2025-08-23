import '../cssModals/sideBar.css'
import { useState, useEffect } from 'react'

export default function SideBar({ data, filter, setFilter, setSearch, search = '' }) {
  const [sidebarHidden, setSidebarHidden] = useState(false)
  const [tags, setTags] = useState([])

  useEffect(() => {
    if (!data) return
    const allTags = [...new Set(data.flatMap(obj => obj.tags[0]))]
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
          <button onClick={() => {
            setSearch('')
            setFilter(false)
          }}>Clear all</button>
          <button className='close' onClick={() => {
            setSidebarHidden(!sidebarHidden)
          }}>
            <img src="/close.svg" height={'30px'} alt="" />
          </button>
        </div>
        <h3>Sort by</h3>
        <input placeholder='🔎' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className='sortButtons'>
          {tags.sort((a, b) => a.localeCompare(b))
            .filter(tag => tag.includes(search.toLowerCase()) || filter === tag)
            .map(tag => (
              <button
                className={filter === tag ? 'active' : ''}
                onClick={() => {
                  filter === tag ? setFilter('') : setFilter(tag)
                }} key={tag}>
                {tag}
              </button>
            ))}
        </div>
      </div>
    </>
  )
}