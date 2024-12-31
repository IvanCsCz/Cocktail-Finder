import { useAppStore } from "../stores/useAppStore"

function IndexPage() {
  const categories = useAppStore(state => state.categories)

  console.log(categories)
  
  return (
    <>
      <h1>Index</h1>
    </>
  )
}

export default IndexPage