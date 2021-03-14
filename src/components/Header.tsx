import '../styles/header.scss'

export function Header() {
  return (
    <header className="header">
      <div>
        <h3 style={{color: 'white', fontSize: 30, margin: 20}}>Nilson</h3>
        <img style={{width: 200, height: 200, borderRadius: 100}} src="/yo.jpg" />
        <h3 style={{color: 'white', margin: 20, fontSize: 30}}>Developer</h3>
      </div>
    </header>
  )
}