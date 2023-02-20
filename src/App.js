import PaintingList from './components/PaintingList'

function App() {
  // const { tags, entries } = data

  // const onTagSelected = (e) => {
  //   const { name: tag, checked } = e.target
  //   const index = selectedTags.indexOf(tag)

  //   if (checked && index === -1) {
  //     selectedTags.push(tag)
  //   } else if (index !== -1) {
  //     // if the tag is already in the array, remove it
  //     selectedTags.splice(index, 1)
  //   }
  //   setSelectedTags(selectedTags.slice())
  // }

  // const checkboxes = tags.map((tag) => {
  //   return (
  //     <label htmlFor={tag} key={tag}>
  //       <input type="checkbox" onChange={onTagSelected} name={tag} id={tag} />
  //       {tag}
  //     </label>
  //   )
  // })

  // const paintings = entries
  //   .filter((painting) => {
  //     if (selectedTags.length === 0) return true
  //     const found = painting.tags.some((r) => selectedTags.includes(r))
  //     return found
  //   })
  //   .map(({ name, image, alt, artist }, i) => {
  //     return (
  //       <Painting
  //         key={i}
  //         name={name}
  //         image={image}
  //         alt={alt}
  //         artist={artist}
  //       ></Painting>
  //     )
  //   })

  return (
    <main>
      <PaintingList></PaintingList>
    </main>
  )
}

export default App
