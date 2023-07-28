
interface Props {
    children: React.ReactNode
}

function AirplaneLayout( {children} : Props) {
  return (
    <main>
        {children}
    </main>
  )
}

export default AirplaneLayout